import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import { Component } from "react";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    persons: [
      { id: "dlerl", name: "Baes", age: 19 },
      { id: "ksfel", name: "Bomberto", age: 2020 },
      { id: "iwler", name: "Jose manueh", age: 2020 },
      { id: "aguac", name: "Johan", age: 31 },
      { id: "teró", name: "Clau", age: 14 },
      { id: "trol", name: "Luis", age: 14 },
      { id: "bocaillo", name: "Jalberto", age: 21 },
      { id: "xd", name: "Fabier", age: 16 },
      { id: "uwu", name: "Comás", age: 19 },
      { id: "caca", name: "Grodolfo", age: 23 },
    ],
    username: "hinigul",
    isPeopleHidden: true,
    word: "word",
  };

  changeNameHandler = (event, personId) => {
    const personsCopy = [...this.state.persons];
    const personIndex = personsCopy.findIndex(
      (person) => person.id === personId
    );
    personsCopy[personIndex].name = event.target.value;
    this.setState({
      persons: personsCopy,
    });
  };

  deleteMeHandler = (personId) => {
    const personsCopy = [...this.state.persons];
    const personIndex = personsCopy.findIndex(
      (person) => person.id === personId
    );
    personsCopy.splice(personIndex, 1);
    this.setState({
      persons: personsCopy,
    });
  };

  togglePeopleHandler = () => {
    this.setState({
      isPeopleHidden: !this.state.isPeopleHidden,
    });
  };

  onWordChangeHandler = (event) => {
    this.setState({
      word: event.target.value,
    });
  };

  renderPeople = () => {
    return (
      <div>
        {this.state.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            deleteMe={() => this.deleteMeHandler(person.id)}
            changeName={(event) => this.changeNameHandler(event, person.id)}
          ></Person>
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
        <button style={buttonStyle}>DON'T CLICK ME!!!!!!</button>
        <button style={buttonStyle} onClick={this.togglePeopleHandler}>
          Show/Hide people
        </button>
        {this.state.isPeopleHidden ? null : this.renderPeople()}
        <UserOutput />
        <UserOutput />
        <input
          type="text"
          value={this.state.word}
          onChange={this.onWordChangeHandler}
        />
        <ValidationComponent wordLength={this.state.word.length} />
        {this.state.word.split("").map((letter) => {
          return <CharComponent letter={letter} />;
        })}
      </div>
    );
  }
}

export default App;
