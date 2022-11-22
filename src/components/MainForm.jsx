import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form``;

const FormContainer = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: center;
  justify-content: center;
`;
const FormLabel = styled.label`
  margin: 0 10px;
`;

const FormInput = styled.input`
  padding: 5px;

  &:focus {
    border: 2px solid green;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 5px;
`;

function MainForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = [
    //   firstName,
    //   lastName,
    //   username,
    // ];
    // console.log(form)
    props.onSave(firstName, lastName, username);
    setFirstName("");
    setLastName("");
    setUsername("");
  };
  return (
    <Form onSubmit={handleSubmit} action="">
      <FormContainer>
        <FormLabel htmlFor="">First Name</FormLabel>
        <FormInput value={firstName} onChange={handleFirstName} type="text" />
      </FormContainer>
      <FormContainer>
        <FormLabel htmlFor="">Last Name</FormLabel>
        <FormInput value={lastName} onChange={handleLastName} type="text" />
      </FormContainer>
      <FormContainer>
        <FormLabel htmlFor="">Username</FormLabel>
        <FormInput value={username} onChange={handleUsername} type="text" />
      </FormContainer>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{username}</div>
      <h2>{props.name.firstName}</h2>
      <h2>{props.name.lastName}</h2>
      <h2>{props.name.username}</h2>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default MainForm;
