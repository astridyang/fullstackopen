import React from 'react'
import { CoursePart } from '../types'
const Course: React.FC<{ coursePart:CoursePart }> = ({ coursePart }) => (
    <p>
        {coursePart.name} {coursePart.exerciseCount}
    </p>
)
const Content: React.FC<{ courseParts: Array<CoursePart> }> = ({ courseParts }) => (
    <div>
        {
            courseParts.map(c => <Course coursePart={c} key={c.name} />)
        }
    </div>
)
export default Content