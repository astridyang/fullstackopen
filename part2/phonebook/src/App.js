import React, { useState, useEffect } from 'react'
import Add from './components/Add'
import List from './components/List'
import Search from './components/Search'
import personService from './services/persons'
import './App.css'

const Notification = ({message}) => {
  if(message == null){
    return null
  }
  return (
    <div className={'notification ' + message.type}>
        {message.text}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterList, setFilterList] = useState([])
  const [alerts, setAlerts] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={alerts}/>
      <Search persons={persons} setFilterList={setFilterList} />
      <List persons={filterList} />
      <Add persons={persons} setPersons={setPersons} setAlerts={setAlerts} />
      <h2>Numbers</h2>
      <List persons={persons} setPersons={setPersons} setAlerts={setAlerts}/>
    </div>
  )
}

export default App