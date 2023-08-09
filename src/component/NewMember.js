import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useState } from "react";

function NewMember({ setMemberList, initialData }) {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
    terms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMember.terms) {
      setMemberList(newMember);
    } else {
      console.log("kabul etmelisin!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMember({
      ...newMember,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="exampleText">Name: </Label>
        <Input
          value={newMember.name}
          onChange={handleInputChange}
          type="text"
          name="name"
          id="exampleText"
          placeholder="enter name"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleSelect">Role: </Label>
        <Input
          onChange={handleInputChange}
          value={newMember.role}
          type="select"
          name="role"
          id="exampleSelect"
          placeholder="select your role"
        >
          <option>forward</option>
          <option>midfielder</option>
          <option>defender</option>
          <option>goalkeeper</option>
          <option>other</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleEmail">Email: </Label>
        <Input
          onChange={handleInputChange}
          value={newMember.email}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="enter email"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            onChange={handleInputChange}
            name="terms"
            checked={newMember.terms}
            type="checkbox"
            id="checkbox2"
          />{" "}
          Accept terms
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
export default NewMember;
