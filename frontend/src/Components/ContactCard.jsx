import { useEffect } from "react";
import { useState } from 'react'
import { Star, MapPin, Phone, Mail, Menu } from 'lucide-react'
import { Facebook, Instagram, Twitter, Video, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContactCard = () => {
  return (
    <section id='contact us for Booking ' className="py-20 bg-white ">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-white bg-pink-500 p-4">Contact Us For Booking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-4 border border-gray-300 rounded"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button className="w-full bg-pink-500 text-white p-4 rounded font-semibold hover:bg-pink-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <a href="https://maps.app.goo.gl/xAq6o11hq4cJtTbr9?g_st=aw">
                <MapPin className="text-pink-500 w-6 h-6 mr-2" />
                <p>
                  Koratagere Main Rd, opposite HDFC Bank, Koratagere Rural,
                  Koratagere, Karnataka 572129
                </p>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="text-pink-500 w-6 h-6 mr-2" />
              <p>+91 7019454130</p>
            </div>
            <div className="flex items-center">
              <Mail className="text-pink-500 w-6 h-6 mr-2" />
              <p>info@blissfulbeauty.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
