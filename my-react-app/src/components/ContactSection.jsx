import React, { useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkedAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("SFPyteUeVO7o0TO_Y");
  }, []);

  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "magarr800@gmail.com",
      link: "magarr800@gmail.com",
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      value: "+9779846195682",
      link: "+9779846195682",
    },
    {
      id: 3,
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/Roshan",
      link: "https://linkedin.com/",
    },
    {
      id: 4,
      icon: FaMapMarkedAlt,
      title: "Location",
      value: "Pokhara, Nepal",
      link: null,
    },
  ];

  // ✅ EmailJS function
  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log("Form data:", {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value
    });

    emailjs
      .sendForm(
        "service_fzywtrc",
        "template_jltpuhf",
        form.current
      )
      .then(
        (response) => {
          console.log("SUCCESS:", response);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED:", error);
          console.error("Error status:", error.status);
          console.error("Error text:", error.text);
          alert(`Failed to send message: ${error.text || error.message}`);
        }
      );
  };

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            Let's Connect.
          </h2>

          <div className="w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out for collaborations, freelance projects,
              internships, or just a friendly chat.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.id}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>

                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {info.title}
                      </h4>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 text-sm hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <form ref={form} onSubmit={sendEmail}>
              
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your message..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;