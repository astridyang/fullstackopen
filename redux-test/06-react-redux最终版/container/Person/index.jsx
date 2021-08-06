import React, { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addPerson } from "../../redux/actions/person";
class Person extends Component {
  addPerson = () => {
    let name = this.nameNode.value;
    let age = this.ageNode.value * 1;
    this.props.addPerson({ id: nanoid(), name, age });
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h2>Person component</h2>
        <h3>current count is: {this.props.count}</h3>
        <p>
          <input
            type="text"
            ref={(c) => (this.nameNode = c)}
            placeholder="your name"
          />
          <input
            type="text"
            ref={(c) => (this.ageNode = c)}
            placeholder="your age"
          />
          <button onClick={this.addPerson}>add</button>
        </p>
        <ul>
          {this.props.persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name}---{person.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.persons, count: state.count }),
  { addPerson }
)(Person);
