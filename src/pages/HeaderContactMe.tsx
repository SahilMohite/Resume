import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = {
        name: form.current.from_name.value,
        email: form.current.from_email.value,
        message: form.current.message.value,
      };

      try {
        const response = await fetch("http://localhost:5000/api/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full md:flex">
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Me</h2>
          <p className="text-gray-600 text-center mb-4">I'd love to hear from you!</p>

          {!isSubmitted ? (
            <form ref={form} onSubmit={sendMessage}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="from_name" // Matches the backend variable
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="from_email" // Matches the backend variable
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  name="message" // Matches the backend variable
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-green-500">Message Submitted!</h2>
              <p className="text-gray-600">Thank you for getting in touch.</p>
              <p className="text-gray-600">Redirecting to homepage...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
