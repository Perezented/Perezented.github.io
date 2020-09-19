import React from "react";
export default function Contact() {
    return (
        <section class="contact" id="contact">
            <div class="unskewleft">
                <h2>Contact Me</h2>
                <div class="form">
                    <form method="GET" action="thanks.html">
                        <div class="fields">
                            <div class="field">
                                <label for="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
                            <div class="field">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                />
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
