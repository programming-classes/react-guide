import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { name: "Fooan", age: 19 },
      { name: "August", age: 2020 },
      { name: "Movember", age: 2020 },
      { name: "Johan", age: 31 },
      { name: "Clau", age: 14 },
      { name: "Luis", age: 14 },
      { name: "Jalberto", age: 14 },
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
    const persons = this.state.persons;
    return (
      <div>
        <Person
          name={persons[this.state.selectedPerson].name}
          age={persons[this.state.selectedPerson].age}
          change={this.nameChangeHandler}
        />
        <Person
          name={persons[this.state.selectedPerson].name}
          age={persons[this.state.selectedPerson].age}
          change={this.nameChangeHandler}
        />
        <Person
          name={persons[this.state.selectedPerson].name}
          age={persons[this.state.selectedPerson].age}
          change={this.nameChangeHandler}
        >
          My Hobbies are: foooooooobear
        </Person>
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
