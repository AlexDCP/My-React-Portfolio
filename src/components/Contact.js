import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Contact() {
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "contactName") {
      setContactName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !contactName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    alert(`Hello ${contactName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setContactName("");
    setMessage("");
    setEmail("");
  };
  return (
    <div className="container d-flex align-items-center min-vh-100 w-50">
      <form className="row bg-secondary bg-gradient rounded">
        <h1 className="text-center fw-bolder">Contact Form:</h1>
        <div className="form-group col-lg-6 offset-lg-3 p-2">
          <label for="name">Name:</label>
          <Form.Control
            value={contactName}
            onChange={handleInputChange}
            name="contactName"
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group col-lg-6 offset-lg-3 p-2">
          <label for="email">Email:</label>
          <Form.Control
            value={email}
            onChange={handleInputChange}
            name="email"
            type="text"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-lg-6 offset-lg-3 p-2">
          <label for="message">Message:</label>
          <textarea 
            value={message}
            onChange={handleInputChange}
            name="message"
            className="form-control" 
            id="message" 
            rows="3"
            >
            </textarea>
        </div>
        <Button onClick={handleFormSubmit} type="button" className="btn btn-success">
            Submit
        </Button>
      </form>
        {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
    )}
    </div>
  );
}

export default Contact;
