import { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState(""); // State to store the user's name
  const [email, setEmail] = useState(""); // State to store the user's name
  const [subject, setSubject] = useState(""); // State to store the user's name
  const [message, setMessage] = useState(""); // State to store the user's name

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3042/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, subject, message }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch {
      console.log("Error");
    }
  };

  return (
    <div className={styles.contactForm}>
      {isSubmitted ? (
        <div className={styles.successMessage}>
          <h2>
            Hej {name}. <br /> Tak for din besked! <br /> Du hører fra os
            snarest.
          </h2>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Navn
            <input
              type="text"
              name="name"
              value={name} // Bind input value to state
              onChange={(e) => setName(e.target.value)} // Update name state on input change
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Hvad drejer henvendelsen sig om?
            <input
              type="text"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </label>
          <label>
            Besked (Skriv dato'er, hvis det drejer sig om en booking)
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
