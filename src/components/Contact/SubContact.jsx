import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SubContact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = "service_bwu65jv";
    const templateId = "template_4u1gi9i";
    const publicKey = "LWgtujEVFY6Gb6V9H";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setIsSending(false);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I'll get back to you soon!",
          confirmButtonColor: "#dc2626",
          background: "#020617", // Swal background update
          color: "#fff",
        });
        e.target.reset();
      },
      (error) => {
        setIsSending(false);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#ef4444",
          background: "#020617",
          color: "#fff",
        });
      },
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      id="contact"
      // Ekhane bg-[#020617] set kora hoyeche
      className="min-h-screen bg-[#020617] text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Background Glows - Red-er poriborte Indigo/Blue glow use kora hoyeche background-er sathe match korte */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight uppercase">
            Let's <span className="text-red-600">Connect</span>
          </h1>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">
            Have a project in mind? Let's turn your vision into a digital reality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-red-600/50 transition-all placeholder:text-gray-600 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-red-600/50 transition-all placeholder:text-gray-600 text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-red-600/50 transition-all resize-none placeholder:text-gray-600 text-white"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 ${
                  isSending
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
                }`}
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Info & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <ContactCard icon={<Mail />} title="Email Me" detail="programmarsabbir@gmail.com" />
              <ContactCard icon={<Phone />} title="Call / WhatsApp" detail="+880 1619408991" />
              <ContactCard icon={<MapPin />} title="Location" detail="Rangamati, Bangladesh" />
            </div>

            {/* Social Icons */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-6 font-medium uppercase text-xs tracking-[0.2em]">
                Digital Presence
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Github, link: "https://github.com/ismailhossain-dev" },
                  {
                    Icon: Linkedin,
                    link: "https://www.linkedin.com/in/mohammad-ismail-hossain-475183396/",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(220, 38, 38, 0.2)",
                      borderColor: "rgba(220, 38, 38, 0.5)",
                    }}
                    className="p-4 bg-white/5 border border-white/10 rounded-2xl transition-all"
                  >
                    <social.Icon size={22} className="text-gray-300 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, detail }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex items-center p-6 bg-white/5 border border-white/10 rounded-[1.5rem] group  transition-all duration-300 shadow-xl"
  >
    <div className="p-4 bg-blue-500 rounded-xl mr-6 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">{title}</p>
      <p className="text-lg font-bold text-white tracking-tight">{detail}</p>
    </div>
  </motion.div>
);

export default SubContact;
