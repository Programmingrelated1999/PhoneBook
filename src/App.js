import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  //get data from the db.json only once and after it make sures that it does not initialize again
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  //setters
  const changeName = (event) => {
    const name = event.target.value;
    setNewName(name);
  };

  const changeNumber = (event) => {
    const newNumber = event.target.value;
    setNumber(newNumber);
  };

  const changeFilter = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  };

  //add a person to the persons list when the user clicks submit
  //check if form is incomplete, then alert user and prevents user from entering
  //check if person is already in phonebook, alert user and prevents user from entering
  //add a person to the phonebook
  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "" || number === "") {
      alert("One or more of the field is empty!!");
      return;
    }
    const name = newName;
    for (const person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }
    const object = { name, number: number };
    const newList = persons.concat(object);
    setPersons(newList);
  };

  //filter the phonebook according to the filter search bar uer enters, then shows the user the filtered people
  const filterItems = () => {
    let arr = [];
    for (const person of persons) {
      if (person.name.toLowerCase().includes(filter.toLowerCase())) {
        arr.push(person);
      }
    }
    return arr;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateFilter={changeFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        changeName={changeName}
        changeNumber={changeNumber}
      />
      <h2>Numbers</h2>
      <Persons filterItems={filterItems} />
    </div>
  );
};

export default App;
