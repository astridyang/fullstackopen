const { ApolloServer, UserInputError, gql, AuthenticationError } = require('apollo-server')
const mongoose = require('mongoose')
const Author = require('./models/author')
const Book = require('./models/book')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'NEED_HERE_A_SECRET_KEY'
const MONGODB_URI = 'mongodb://localhost/graphql'
const {PubSub} = require('apollo-server')
const pubsub = new PubSub()
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log('connect to mongodb.')
    })
    .catch((error) => {
        console.log('error conection to mongdb: ', error.message)
    })
// let authors = [
//     {
//         name: 'Sandi Metz', // birthyear not known
//         id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
//     },
// ]

/*
 * Saattaisi olla järkevämpää assosioida kirja ja sen tekijä tallettamalla kirjan yhteyteen tekijän nimen sijaan tekijän id
 * Yksinkertaisuuden vuoksi tallennamme kuitenkin kirjan yhteyteen tekijän nimen
*/

// let books = [
//     {
//         title: 'Clean Code',
//         published: 2008,
//         author: 'Robert Martin',
//         id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
//         genres: ['refactoring']
//     },
// ]

const typeDefs = gql`
    type Author {
        name: String!,
        born: Int,
        id: ID!,
        bookCount: Int
    }
  type Book {
      title: String!,
      published: Int!,
      author: Author!,
      id: ID!,
      genres: [String!]!
  }
  
  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }
  
  type Token {
    value: String!
    userGenre: String
  }
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author]
    me: User
  }
  type Mutation {
    addBook(
        title: String!,
        author: String!,
        published: Int!,
        genres: [String!]!
    ): Book
    editAuthor(
        name: String!,
        setBornTo: Int!
    ): Author
    createUser(
        username: String!
        favoriteGenre: String!
      ): User
    login(
        username: String!
        password: String!
      ): Token
  }
  type Subscription{
      bookAdded: Book!
  }
`

const resolvers = {
    Query: {
        bookCount: () => Book.collection.countDocuments(),
        authorCount: () => Author.collection.countDocuments(),
        allBooks: async (root, args) => {
            if (args.author) {
                const author = await Author.findOne({ name: args.author })
                if (author) {
                    return Book.find({ author: author._id }).populate('author', { name: 1 })
                }
            }
            if (args.genre) {
                let re = new RegExp("" + args.genre, "i")
                return Book.find({ genres: re }).populate('author', { name: 1 })
            } else {
                return Book.find({}).populate('author', { name: 1 })
            }
        },
        allAuthors: () => Author.find({}),
        me: (root, args, context) => {
            return context.currentUser
        }
    },
    Author: {
        bookCount: (root)=> root.books.length,
        id: (root) => root._id,
        name: (root) => root.name
    },
    Mutation: {
        addBook: async (root, args, context) => {
            // await Book.deleteMany({})
            // await Author.deleteMany({})
            const currentUser = context.currentUser
            if (!currentUser) {
                throw new AuthenticationError('not authenticated')
            }
            let authorName = args.author
            let author = await Author.findOne({ name: authorName })
            const book = new Book({ ...args })
            try {
                if (!author) {
                    author = new Author({ name: authorName })
                }
                author.books = author.books.concat(book._id)
                await author.save();
                book.author = author._id
                await book.save()
                // todo 
                const newBook = {
                    id: book._id,
                    title: book.title,
                    published: book.published,
                    genres: book.genres,
                    author: author
                }
                pubsub.publish('BOOK_ADDED', {bookAdded: newBook})
                return newBook
            } catch (error) {
                throw new UserInputError(error.message, {
                    invalidArgs: args
                })
            }

        },
        editAuthor: async (root, args, context) => {
            const currentUser = context.currentUser
            if (!currentUser) {
                throw new AuthenticationError('not authenticated')
            }
            let authorName = args.name
            let author = await Author.findOne({ name: authorName })
            author.born = args.setBornTo
            await author.save()
            return author
        },
        createUser: (root, args) => {
            let user = new User({ ...args })
            return user.save()
                .catch(error => {
                    throw new UserInputError(error.message, {
                        invalidArgs: args
                    })
                })
        },
        login: async (root, args) => {
            const user = await User.findOne({ username: args.username })
            if (!user || args.password != 'secred') {
                throw new UserInputError('wrong credentials')
            }
            const tokenForUser = {
                username: user.username,
                id: user._id
            }
            return { value: jwt.sign(tokenForUser, JWT_SECRET), userGenre: user.favoriteGenre }
        }
    },
    Subscription: {
        bookAdded:{
            subscribe: ()=>pubsub.asyncIterator(['BOOK_ADDED'])
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        const auth = req ? req.headers.authorization : null
        if (auth && auth.toLowerCase().startsWith('bearer ')) {
            const decodeToken = jwt.verify(auth.substring(7), JWT_SECRET)
            const currentUser = User.findById(decodeToken.id)
            return { currentUser }
        }
    }
})

server.listen().then(({ url, subscriptionsUrl }) => {
    console.log(`Server ready at ${url}`)
    console.log(`Subscriptions ready at ${subscriptionsUrl}`)
})