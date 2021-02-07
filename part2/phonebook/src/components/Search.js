import React, {useState} from 'react'

const Search = ({ persons, setFilterList }) => {
    const [keyword, setKeyword] = useState('')
    
    const handleKeywordChange = (event) => {
        let keyword = event.target.value
        setKeyword(keyword)
    }
    const filterName = (event) => {
        event.preventDefault()
        let result = [];
        persons.map(person => {
            if (person.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                result.push(person)
            }
        })
        setFilterList(result.slice())
        setKeyword('')
    }

    return (
        <>
            <form onSubmit={filterName}>
                <p>filter shown with <input value={keyword} onChange={handleKeywordChange} /><button type="submit">add</button></p>
            </form>
        </>
    )
}

export default Search