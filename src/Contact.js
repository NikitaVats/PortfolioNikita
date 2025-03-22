import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [nameLabel, setNameLabel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e, label) => {
    const value = e.target.value;
    if (label == "Name") {
      setNameLabel(value);
    }
    if (label == "Email") {
      setEmail(value);
    }
    if (label == "Message") {
      setMessage(value);
    }
  };
  const recipientMailAdd = "nikitavats03@gmail.com";
  const mailToLink = `mailto:${recipientMailAdd}?subject=${encodeURIComponent(
    "New Contact Form Submission"
  )}`;
  const submitHandler = () => {};
  return (
    <div class="contact">
      <h1>Contact</h1>
      <p
        style={{
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: 600,
          fontSize: "xx-large",
          color: "rgba(59, 130, 246)",
        }}
      >
        Connect with me
      </p>
      <p>
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I'd love to hear from you.
      </p>
      <form
        className="form"
        action="https://formspree.io/f/mvgkaoev"
        method="POST"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={nameLabel}
          placeholder="Enter your name"
          onChange={(e) => {
            handleChange(e, "Name");
          }}
        ></input>
        <label>Email</label>
        <input
          type="email"
          value={email}
          name="email"
          placeholder="Enter your email"
          onChange={(e) => {
            handleChange(e, "Email");
          }}
        ></input>
        <label>Message</label>
        <textarea
          className="text-area"
          name="message"
          value={message}
          placeholder="Enter your message..."
          onChange={(e) => {
            handleChange(e, "Message");
          }}
        ></textarea>
        <div className="button-contact">
          <a href={mailToLink}>
            <p>Send me email directly</p>
          </a>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
