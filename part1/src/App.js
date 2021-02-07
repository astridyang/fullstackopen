import React from 'react'
import Course from './components/Course'

const App = ({course, nodejs}) => {
  
    return (
      <>
        <Course course={course} />
        <Course course={nodejs} />
      </>
    )
  
  }
  export default App