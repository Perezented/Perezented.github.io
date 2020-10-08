import emailjs from "emailjs-com";
import React from "react";
// import { init } from "emailjs-com";
// init("user_2WocCOhmC4a9o4yO5bwUB");
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

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
  return (
    <section class="contact" id="contact">
      <div class="unskewleft">
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
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                ></textarea>
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
