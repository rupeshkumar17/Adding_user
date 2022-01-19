import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid range",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const UsernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="age"
            type="text"
            value={enteredUsername}
            onChange={UsernameChangedHandler}
          />
          <label htmlFor="age"> Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
