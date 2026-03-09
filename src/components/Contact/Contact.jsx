import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiChatAlt2, HiPhone, HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Container from "../Container";

const Contact = () => {
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
          text: "Thank you for reaching out. I will get back to you soon!",
          confirmButtonColor: "#4f46e5",
          background: "#0f172a",
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
          background: "#0f172a",
          color: "#fff",
        });
      },
    );
  };

  return (
    <div className="bg-[#020617] bg-[radial-gradient(circle_at_50%_50%,#0f172a_0%,#020617_100%)]">
      <Container>
        <section id="contact" className="py-20 px-4 md:py-32 relative overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16 md:mb-24"
            >
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
                Let's <span className="text-indigo-500">Connect</span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8"></div>
              <p className="text-lg md:text-xl text-slate-400 font-medium">
                Any project in mind? Let's turn it into reality.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Phone Card */}
                <a
                  href="tel:01619408991"
                  className="block p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-indigo-500/40 transition-all group shadow-2xl"
                >
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <HiPhone size={28} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">
                    Phone & WhatsApp 🇧🇩
                  </h3>
                  <p className="text-xl font-bold text-white tracking-tighter">+880 1619408991</p>
                </a>

                {/* Email Card */}
                <div className="p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-indigo-500/40 transition-all shadow-2xl group">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <HiMail size={28} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">
                    Email
                  </h3>
                  <p className="text-lg font-bold text-white tracking-tighter break-words">
                    programmarsabbir@gmail.com
                  </p>
                </div>

                {/* Social Card */}
                <div className="p-8 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-2xl">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">
                    Digital Presence
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: <FaLinkedin size={22} />,
                        link: "https://www.linkedin.com/in/mohammad-ismail-hossain-475183396/",
                        color: "hover:bg-blue-600",
                      },
                      {
                        icon: <FaGithub size={22} />,
                        link: "https://github.com/ismailhossain-dev",
                        color: "hover:bg-white hover:text-black",
                      },
                      {
                        icon: <FaFacebook size={22} />,
                        link: "https://web.facebook.com/md.sabbir.926093",
                        color: "hover:bg-blue-500",
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-4 bg-white/5 rounded-2xl text-slate-400 transition-all ${social.color} shadow-lg`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 rounded-[3.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-2xl"
                >
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Full Name"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 ring-indigo-500 transition-all text-white placeholder:text-slate-500"
                  />
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Email Address"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 ring-indigo-500 transition-all text-white placeholder:text-slate-500"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project..."
                    className="md:col-span-2 w-full px-6 py-4 rounded-[2rem] bg-white/5 border border-white/10 outline-none focus:ring-2 ring-indigo-500 transition-all resize-none text-white placeholder:text-slate-500"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`md:col-span-2 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm transition-all relative overflow-hidden group shadow-lg ${
                      isSending
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                        : "bg-blue-600 text-white hover:shadow-blue-500/20"
                    }`}
                  >
                    {/* Hover Slide Effect */}
                    {!isSending && (
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    )}

                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
