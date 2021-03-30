import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Total from './components/Total'
import Content from './components/Content'
import { CoursePart } from './types'
import { stringify } from "node:querystring";
const App: React.FC = () => {
  const courseName = "Half Stack application development";

  // this is the new coursePart variable
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      type: "special"
    }
  ];
  interface ContentProps {
    courseParts: {
      name: string;
      exerciseCount: number;
      groupProjectCount?: number;
      description?: string;
      exerciseSubmissionLink?: string;
      exerciseLevel?: string;
      requirements?: Array<string>;
    }
  }
  const Course: React.FC<ContentProps> = ({ courseParts }) => (
    <div>
      <h3>{courseParts.name} {courseParts.exerciseCount}</h3>
      {courseParts.description && <p>{courseParts.description}</p>}
      {courseParts.groupProjectCount && <p>Project count: {courseParts.groupProjectCount}</p>}
      {courseParts.exerciseSubmissionLink && <p>submit to: <a href="{courseParts.exerciseSubmissionLink}">{courseParts.exerciseSubmissionLink}</a></p>}
      {courseParts.requirements && <p>required skills: {courseParts.requirements.join(', ')}</p>}
    </div>

  )
  const Part = () => {
    return courseParts.map(part => {
      switch (part.name) {
        case "Fundamentals":
          return <Course courseParts={part} />
        case "Using props to pass data":
          return <Course courseParts={part} />
        case "Deeper type usage":
          return <Course courseParts={part} />
        default:
          return <Course courseParts={part} />
      }
    })
  }
  return (
    <div>
      <Header courseName={courseName} />
      {Part()}
      {/* <Content courseParts={courseParts} /> */}
      <Total courseParts={courseParts} />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
export default App