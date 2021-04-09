import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import { Component } from "react";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dlerl", name: "Fuan", age: 19 },
      { id: "ksfel", name: "August", age: 2020 },
      { id: "iwler", name: "Movember", age: 2020 },
      { id: "aguac", name: "Johan", age: 31 },
      { id: "teró", name: "Clau", age: 14 },
      { id: "trol", name: "Luis", age: 14 },
      { id: "bocaillo", name: "Jalberto", age: 21 },
      { id: "xd", name: "Fabier", age: 16 },
      { id: "uwu", name: "Comás", age: 19 },
      { id: "caca", name: "Grodolfo", age: 23 },
    ],
    selectedPerson: 0,
    username: "hinigul",
    isPeopleHidden: false,
  };

  switchNameHandler = () => {
    this.setState({ selectedPerson: (this.state.selectedPerson + 1) % 7 });
  };

  switchUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [{ name: event.target.value, age: 19 }],
    });
  };

  togglePeopleHandler = () => {
    this.setState({
      isPeopleHidden: !this.state.isPeopleHidden,
    });
  };

  renderPeople = () => {
    return (
      <div>
        {this.state.persons.map((person) => (
          <Person name={person.name} age={person.age}></Person>
        ))}
      </div>
    );
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "5px solid blue",
      padding: "8px",
      margin: "5px",
    };
    return (
      <div className="App">
        <h1>Hi there how is it going bro?</h1>
        <button style={buttonStyle} onClick={this.switchNameHandler}>
          DON'T CLICK ME!!!!!!
        </button>
        <button style={buttonStyle} onClick={this.togglePeopleHandler}>
          Show/Hide people
        </button>
        {this.state.isPeopleHidden ? null : this.renderPeople()}
        <UserInput
          username={this.state.username}
          onUsernameChange={this.switchUsernameHandler}
        />
        <UserOutput username={this.state.username} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
