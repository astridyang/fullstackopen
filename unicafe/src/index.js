import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducers/reducer'

const store = createStore(counterReducer)


const Button = ({ handlerClick, text }) => {
  return (
    <button onClick={handlerClick}>{text}</button>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad
  if (all > 0) {
    return (
      <>
        <h3>statistics</h3>
        <table>
          <tbody>
            <tr><td>good</td><td>{good}</td></tr>
            <tr><td>neutral</td><td>{neutral}</td></tr>
            <tr><td>bad</td><td>{bad}</td></tr>
            <tr><td>all</td><td>{all}</td></tr>
            <tr><td>average</td><td>{(good + bad * -1) / (all)}</td></tr>
            <tr><td>positive</td><td>{good / (all) * 100} %</td></tr>
          </tbody>
        </table>
      </>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }

}
const App = () => {

  return (
    <div>
      <h3>give feedback</h3>
      <p>
        <Button handlerClick={() => store.dispatch({type: 'GOOD'})} text="good" />
        <Button handlerClick={() => store.dispatch({type: 'OK'})} text="neutral" />
        <Button handlerClick={() => store.dispatch({type: 'BAD'})} text="bad" />
        <Button handlerClick={() => store.dispatch({type: 'ZERO'})} text="zero" />
      </p>
      <Statistics good={store.getState().good} neutral={store.getState().ok} bad={store.getState().bad} />
    </div>
  )
}


const renderApp = ()=>{
  ReactDOM.render(<App />,
    document.getElementById('root')
  )
}
renderApp()
store.subscribe(renderApp)