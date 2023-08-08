import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function NewMember({ setMemberList, initialData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMemberList({
      ...initialData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="exampleText">Name: </Label>
        <Input
          onChange={handleInputChange}
          type="text"
          name="text"
          id="exampleText"
          placeholder="enter name"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="exampleSelect">Role: </Label>
        <Input
          onChange={handleInputChange}
          type="select"
          name="select"
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
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="enter email"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input onChange={handleInputChange} type="checkbox" id="checkbox2" />{" "}
          Accept terms
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
export default NewMember;
