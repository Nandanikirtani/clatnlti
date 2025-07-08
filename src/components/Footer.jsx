import React from 'react';
import {
  Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Clock
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">CLAT NLTI</h2>
            <p className="text-gray-300 mb-6">India’s top CLAT coaching institute helping students achieve NLU admissions.</p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {['About Us', 'Courses', 'Faculty', 'Results', 'Blog', 'FAQ', 'Admissions', 'Careers'].map((link) => (
                <li key={link}><a href="#" className="hover:text-yellow-400">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                'CLAT Foundation (2 Yr)', 'Target Batch (1 Yr)', 'Crash Course (60 Days)',
                'AILET Prep', 'SLAT Coaching', 'Mock Tests', 'CA Program', 'Mentorship'
              ].map((course) => (
                <li key={course}><a href="#" className="hover:text-yellow-400">{course}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p>123, Sector 15, New Delhi - 110001</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-yellow-400" />
                <div><p className="font-medium">+91-9876543210</p><p className="text-sm">Call Us</p></div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-yellow-400" />
                <div><p className="font-medium">info@clatnlti.com</p><p className="text-sm">Email Support</p></div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-sm">Mon–Sat: 9am–7pm<br />Sun: 10am–5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 CLAT NLTI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400">Terms</a>
            <a href="#" className="hover:text-yellow-400">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
