import React from "react";

import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact">
      <div className="content-container contact-container">
        <h1>Contact Us</h1>
        <p>
          Want a special version of the app to meet your business needs? Get in
          touch and we'll discuss the details!
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={5}></textarea>
          </div>
          <Link to={"/"}>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
