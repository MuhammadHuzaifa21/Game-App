// src/pages/Contact.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add actual form submission logic here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    navigate("/");
  };

  return (
    <>
      {/* Hero Banner */}
      <div
        className="position-relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
        <div className="container h-100 position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 fw-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <p className="text-center text-muted mb-4 fs-5">
                  Have questions about our games? We'd love to hear from you!
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-semibold">
                      Subject
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject...</option>
                      <option value="Game Inquiry">Game Inquiry</option>
                      <option value="Order Help">Order Help</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">
                      Your Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 shadow"
                  >
                    Send Message ✉️
                  </button>
                </form>

                <hr className="my-4" />

                <div className="row text-center">
                  <div className="col-md-4">
                    <span className="fs-2">📍</span>
                    <p className="mt-2">
                      <strong>Visit Us</strong>
                      <br />
                      Game Hub HQ
                      <br />
                      Gaming Street 123
                    </p>
                  </div>
                  <div className="col-md-4">
                    <span className="fs-2">📞</span>
                    <p className="mt-2">
                      <strong>Call Us</strong>
                      <br />
                      +92 123 4567890
                      <br />
                      Mon-Fri 9AM-6PM
                    </p>
                  </div>
                  <div className="col-md-4">
                    <span className="fs-2">📧</span>
                    <p className="mt-2">
                      <strong>Email Us</strong>
                      <br />
                      support@gameHub.com
                      <br />
                      We reply within 24hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
