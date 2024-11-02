import { useState } from 'react'
import { Star, MapPin, Phone, Mail, Menu } from 'lucide-react'
import { Facebook, Instagram, Twitter, Video, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom';

import hairStylingImage from '../images/Untitled design.svg';
import ManicureImage from '../images/Manicure.svg';
import FacialImage from '../images/Facial.svg';
import BridalImage from '../images/Bridal.svg';
import SpaImage from '../images/Spa.svg';
import Home_Hair_Care from '../images/Home_Hair_Care.svg';
import Home_beauty_parkour from '../images/Home_beauty_parkour.svg';
import Home_Spa from '../images/Home_Spa.svg';



export default function BeautyParlor() {
  const [activeService, setActiveService] = useState(null) 

  const services = [
    { name: 'Hair Styling', description: 'Transform your look with our expert stylists.', image: hairStylingImage },
    { name: 'Facials', description: 'Rejuvenate your skin with our luxurious facial treatments.', image: FacialImage },
    { name: 'Manicures', description: 'Pamper your hands with our deluxe manicure services.', image: ManicureImage },
    { name: 'Bridal Makeup', description: 'Enhance your natural beauty with our professional makeup artists.', image: BridalImage },
    { name: 'Spa Services', description: 'Relax and unwind with our range of spa treatments.', image: SpaImage },
  ]

  const homeServices = [
    { name: 'Home Hair Care', description: 'Expert hair styling and care in the comfort of your home.', image: Home_Hair_Care },
    { name: 'Mobile Makeup', description: 'Professional makeup services for any occasion, right at your doorstep.', image: Home_beauty_parkour},
    { name: 'In-Home Spa', description: 'Luxurious spa treatments brought to your personal space.', image: Home_Spa },
  ]

  const testimonials = [
    { name: 'Sarah L.', text: 'Blissful Beauty is my go-to place for self-care. The staff is amazing!' },
    { name: 'Emily R.', text: 'I always leave feeling refreshed and beautiful. Highly recommend!' },
    { name: 'Jessica M.', text: 'The attention to detail and personalized service is unmatched.' },
  ]

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
{/* Navigation */}
<nav className="bg-white shadow-md">

  
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-rose-600">Blissful Beauty</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="text-gray-700 hover:text-rose-600">About</Link>
            <Link href="#services" className="text-gray-700 hover:text-rose-600">Services</Link>
            <Link href="#offers" className="text-gray-700 hover:text-rose-600">Offers</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-rose-600">Gallery</Link>
            <Link href="#contact" className="text-gray-700 hover:text-rose-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Navigation Button */}
      <div className="fixed top-4 right-4 z-50">
        <button className="bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-300">
          <Menu className="w-6 h-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {/* Welcome Banner */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src= {require('../images/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon.jpg')}
          alt="Dreams Beauty Parlor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">Dreams Studio and Herbal Beauty Parlor</h1>
          <p className="text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-300">Where Every Look Begins with a Dream</p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 animate-fade-in-up animation-delay-600">
            Book Now
          </button>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 px-4 md:px-0 id=about ">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-xl leading-relaxed">
            At Dreams Beauty Parlour, we are committed to providing personalized beauty services that enhance your natural radiance. 
            Our team of expert stylists and aestheticians are dedicated to creating a serene and luxurious experience tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl"
                onTouchMove={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{service.name}</h3>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.description}</p>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition duration-300">
                      Learn More
                    </button>
                    <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-pink-500 transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Home Services Highlight */}
          <div className="bg-pink-200 rounded-xl p-8 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-pink-700">Home Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {homeServices.map((service, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-xl bg-white shadow-lg"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-pink-600">{service.name}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition duration-300 w-full">
                      Book Home Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?height=400&width=400&text=Gallery+Image+${index + 1}`}
                  alt={`Gallery Image ${index + 1}`}
                  className="hover:scale-110 transition duration-300 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Sarah L.', text: 'Blissful Beauty always leaves me feeling refreshed and confident. Their attention to detail is unmatched!' },
              { name: 'Emily R.', text: 'The spa services here are top-notch. I always leave feeling relaxed and rejuvenated.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-rose-100 rounded-lg p-6">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <input type="text" className="w-full p-4 border border-gray-300 rounded" placeholder="Your Name" />
                <input type="email" className="w-full p-4 border border-gray-300 rounded" placeholder="Your Email" />
                <textarea className="w-full p-4 border border-gray-300 rounded" rows="5" placeholder="Your Message"></textarea>
                <button className="w-full bg-pink-500 text-white p-4 rounded font-semibold hover:bg-pink-600 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <MapPin className="text-pink-500 w-6 h-6 mr-2" />
                <p>123 Beauty St, Dream City, Blissland</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="text-pink-500 w-6 h-6 mr-2" />
                <p>+1 123 456 7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-pink-500 w-6 h-6 mr-2" />
                <p>info@blissfulbeauty.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-pink-500 text-white text-center">
        <p>&copy; 2024 Dreamz Studio and Herbal Beauty Parlor. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
          <a href="#" aria-label="Linkedin"><Linkedin /></a>
        </div>
      </footer>
    </div>
  )
}
