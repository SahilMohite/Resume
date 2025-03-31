import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_kblcleh',      // Replace with your actual service ID
          'template_3tkavzg',     // Replace with your actual template ID
          form.current,
          'AWbwVlk6ek5gPlbrY'
        )
        .then((result) => {
          console.log('Email successfully sent:', result.text);
          setIsSubmitted(true);
          setTimeout(() => navigate('/'), 2000);  // Redirect after 2 seconds
        })
        .catch((error) => {
          console.error('Email failed to send:', error);
        });
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full md:flex">
        
        {/* Image on the left */}
        <div className="md:w-1/2">
          <img 
            src="https://img.freepik.com/free-vector/cute-man-working-computer-with-coffee-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3868.jpg"  // Replace with your image URL
            alt="Contact"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Form on the right */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Me</h2>
          <p className="text-gray-600 text-center mb-4">
            I'd love to hear from you! Please fill out the form below to get in touch.
          </p>

          {!isSubmitted ? (
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="from_name"       // This should match the template variable
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="from_email"      // This should match the template variable
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <label htmlFor="message" className="block text-gray-700 font-serif">( * Please attach the link of your template)</label>
                <textarea
                  name="message"         // This should match the template variable
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
