"use client";
import React, { useState } from "react";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const msgEl = document.querySelector("#contact-form .messages");

    // Clear previous messages
    if (msgEl) msgEl.innerHTML = "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.ok) {
        if (msgEl)
          msgEl.innerHTML = '<p class="success">Message sent successfully.</p>';
        form.reset();
      } else {
        if (msgEl)
          msgEl.innerHTML =
            '<p class="error">Failed to send. Please try again.</p>';
      }
    } catch (err) {
      if (msgEl)
        msgEl.innerHTML =
          '<p class="error">Unexpected error. Please try later.</p>';
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="#0">+966 5996 47591</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>Riyadh, KSA</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>Sarimxahid123@gmail.com</p>
              </div>

              <div className="social-icon mt-50">
                <a href="linkedin.com/in/muhammad-sarim-679576212/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/sarim2696/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form id="contact-form" className="form2" onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                        disabled={isLoading}
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                        disabled={isLoading}
                        style={{
                          opacity: isLoading ? 0.6 : 1,
                          cursor: isLoading ? "not-allowed" : "pointer",
                        }}
                      >
                        <span className="text">
                          {isLoading ? "Sending..." : "Let's Talk"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
