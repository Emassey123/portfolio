import React, { useState, useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_i4ys185",
      "template_3n0cbv9",
      form.current,
      "qhsSu59_0m4UymUmh"
    );
    alert("Thank you for submitting a message.");
    e.target.reset();
  };

  const handleFirstNameInputChange = (e) => {
    setFormValues({ ...formValues, firstName: e.target.value });
  };
  const handleLastNameInputChange = (e) => {
    setFormValues({ ...formValues, lastName: e.target.value });
  };
  const handleEmailInputChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };
  const handleSubjectInputChange = (e) => {
    setFormValues({ ...formValues, subject: e.target.value });
  };
  const handleMessageInputChange = (e) => {
    setFormValues({ ...formValues, message: e.target.value });
  };
  return (
    <>
      <h2 className="main-heading">Contact Me</h2>
      <div className="wrapper" id="contact">
        <form action="" ref={form} method="POST" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Type first name"
              required
              onChange={handleFirstNameInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Type last Name"
              required
              onChange={handleLastNameInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              required
              onChange={handleEmailInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter subject here..."
              required
              onChange={handleSubjectInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Type your message here...."
              onChange={handleMessageInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
