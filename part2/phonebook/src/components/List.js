import React from 'react'
import personService from '../services/persons'

const List = ({ persons, setPersons }) => {
  const confirmDel = (id) => {
    if (window.confirm('are you sure to del this record?')) {
      personService
        .del(id)
        .then(response => {
          setPersons(persons.filter(p => p.id != id))
        })
    }
  }
  return (
    <div>
      {
        persons.map(person =>
          <p key={person.name}>{person.name} {person.number} <button onClick={() => confirmDel(person.id)}>delete</button></p>
        )
      }
    </div>
  )
}

export default List