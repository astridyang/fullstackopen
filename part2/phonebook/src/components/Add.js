import React, { useState } from 'react'
import personService from '../services/persons'

const Add = ({ persons, setPersons, setAlerts }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault()
        let duplicate_id = 0
        for (let i = 0, n = persons.length; i < n; i++) {
            if (persons[i].name == newName) {
                duplicate_id = persons[i].id
            }
        }
        let person = {
            name: newName,
            number: newNumber
        }
        if (duplicate_id) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                personService
                    .update(duplicate_id, person)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== duplicate_id ? person : returnedPerson))
                        setNewName('')
                        setNewNumber('')
                    })
                    .catch(error => {
                        if (error.response?.data?.error) {
                            setAlerts({ type: 'error', text: error.response.data.error })
                        } else {
                            setAlerts({ type: 'error', text: `Information of ${person.name} has already been removed from server` })
                        }

                        setTimeout(() => {
                            setAlerts(null)
                        }, 3000);

                    })
            }
        } else {
            personService
                .create(person)
                .then(response => {
                    setPersons(persons.concat(response))
                    setNewName('')
                    setNewNumber('')
                    setAlerts({ type: 'success', text: `Added ${person.name}` })
                    setTimeout(() => {
                        setAlerts(null)
                    }, 3000);
                })
                .catch(error => {
                    setAlerts({ type: 'error', text: error.response.data.error })
                    setTimeout(() => {
                        setAlerts(null)
                    }, 2500);
                })
        }

    }
    return (
        <>
            <h2>Add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    <p>name: <input value={newName} onChange={handleNameChange} /></p>
                    <p>number: <input value={newNumber} onChange={handleNumberChange} /></p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Add