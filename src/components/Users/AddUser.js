import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
 
  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };
 
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return; 
    }
    if (+userAge < 1) {
      return;
    }
    props.onAddUser(userName, userAge);
    setUserAge("");
    setUserName("");
  };
  
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={userName}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userAge}
          onChange={userAgeChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
