import React from 'react'

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
  
    )
  }
  const Total = ({ parts }) => {
    const total = parts.reduce((prev, curr) => {
      return prev + curr.exercises
    }, 0)
    return (
      <p>Number of exercises {total}</p>
    )
  }
  const Course = ({ course }) => {
    return (
      <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }
  export default Course