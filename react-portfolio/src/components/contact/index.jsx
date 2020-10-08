import emailjs from "emailjs-com";
import React, { useState } from "react";

export default function Contact() {
  const [thankYouMessage, setThankYouMessage] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    setTimeout(() => {
      setThankYouMessage(false);
    }, 6000);
    setThankYouMessage(true);
    emailjs
      .sendForm(
        "service_r5la9ln",
        "template_h2o3mrf",
        e.target,
        "user_2WocCOhmC4a9o4yO5bwUB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  console.log(thankYouMessage);
  // thankYouMessage === true && setTimeout(setThankYouMessage(false), 4000);
  return (
    <section class="contact" id="contact">
      <div class="unskewleft">
        {thankYouMessage === true ? (
          <div>
            <h4 style={{ opacity: 1 }}>
              Thank You, Your message has been recieved!
            </h4>
          </div>
        ) : (
          <div>
            <h4 style={{ opacity: 0 }}>You should not be able to see me</h4>
          </div>
        )}
        <h2>Contact Me</h2>
        <div class="form">
          <form onSubmit={sendEmail}>
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div class="field">
                <label for="subject">Subject</label>
                <input type="text" name="subject" id="subject" required />
              </div>
              <div class="field">
                <label class="message" for="message">
                  Message
                </label>
                <textarea name="message" id="message" rows="4" required />
              </div>
            </div>
            <ul class="actions">
              <button class="join" type="submit">
                Send Message
              </button>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}
