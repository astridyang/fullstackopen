describe('Blog app', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
            name: 'Amamiya Kaori',
            username: 'Kaori',
            password: '123456'
        }
        cy.request('POST', 'http://localhost:3000/api/users/', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function () {
        cy.contains('username')
    })
    it('succeeds with correct credentials', function () {
        cy.get('#username').type('Kaori')
        cy.get('#password').type('123456')
        cy.get('#login-btn').click()

        cy.contains('Kaori logged in')
    })

    it('fails with wrong credentials', function () {
        cy.get('#username').type('Kaori')
        cy.get('#password').type('120')
        cy.get('#login-btn').click()

        cy.get('.error').should('contain', 'Wrong credencial')
        cy.get('html').should('not.contain', 'Kaori logged in')
    })

    describe('when logged in', function () {
        beforeEach(function () {
            cy.login({ username: 'Kaori', password: '123456' })
        })
        it('A blog can be created', function () {
            cy.contains('new blog').click()
            cy.get('#title').type('a new blog create by cypress')
            cy.get('#author').type("amamiya")
            cy.get('#url').type('http://fate-go.jp')
            cy.contains('create').click()

            cy.contains('a new blog create by cypress')
        })
        describe('and a blog exits', function () {
            beforeEach(function () {
                cy.createBlog({ title: 'first blog create by cypress', author: 'kaori', url: 'http://ak1.com', likes: 2 })
                cy.createBlog({ title: 'second blog', author: 'kaori', url: 'http://ak2.com', likes: 1 })
                cy.createBlog({ title: 'third blog', author: 'kaori', url: 'http://ak3.com', likes: 3 })
            })
            it('Blog list is sorted', function () {
                cy.get('html').find('.blog-item').then(blogs => {
                    cy.wrap(blogs[0]).should('contain', 'third blog')
                    cy.wrap(blogs[1]).should('contain', 'first blog')
                    cy.wrap(blogs[2]).should('contain', 'second blog')
                })
            })
            it('A blog can be liked', function () {
                cy.contains('second blog').parent('.blog-item').as('theBlog')
                cy.get('@theBlog').find('.view').click()
                cy.get('@theBlog').find('.like').click()
                cy.get('@theBlog').contains('likes: 2')
            })

            it('A blog can be deleted by creator', function () {
                cy.contains('third blog').parent('.blog-item').find('.del').click()
                cy.get('html').should('not.contain', 'third blog')
            })
        })
    })
})
