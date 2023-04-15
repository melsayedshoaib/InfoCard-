import React, { useEffect, useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)."
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  const errorHandler = () => {
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal onConfirm={ errorHandler} title={error.title} message={ error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input value={enteredUsername} onChange={usernameChangeHandler} type="text" name="username" id="username" />
          <label htmlFor="age">Age (Years)</label>
          <input value={enteredAge} onChange={ageChangeHandler} type="number" name="age" id="age" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
