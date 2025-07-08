import React, { useState } from "react";
import { Clock, Calendar, Users, BookOpen, Target, CheckCircle } from 'lucide-react';

const features = [
  { icon: BookOpen, text: "2 Classes per Subject Daily" },
  { icon: Target, text: "Subject-wise Mock Tests" },
  { icon: Users, text: "Personal Mentorship" },
  { icon: Clock, text: "Doubt Clearing Sessions" },
  { icon: CheckCircle, text: "Study Material Included" },
  { icon: Calendar, text: "Flexible Timing Options" }
];

const Crashcourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We will contact you soon.");
  };


  return (
    <div id="crash" className="min-h-screen bg-orange-50 py-12 mt-16 px-4 md:px-20">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-white bg-amber-600 px-6 py-2 rounded-3xl font-semibold text-sm">
          LIMITED TIME OFFER – Ends in 7 Days!
        </p>
        <h1 className="text-blue-600 text-4xl md:text-5xl font-bold">
          CLAT Crash Course 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Intensive 60-day program designed for last-minute preparation with proven results
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-start mt-12">
        <div className="w-full md:w-1/2 p-4 space-y-6">
          <div className="bg-white border-2 border-orange-200 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" /> Course Highlights
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-6 pt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div><strong>Duration:</strong> 60 Days Intensive</div>
              <div><strong>Start Date:</strong> 15th January 2026</div>
              <div><strong>Batch Size:</strong> Max 25 Students</div>
              <div><strong>Mode:</strong> Online + Offline</div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg shadow p-6 relative">
            <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">50% OFF</span>
            <h2 className="text-xl font-bold text-green-600 mb-4">Special Pricing</h2>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-4xl font-bold text-green-600">₹19,999</span>
              <span className="text-2xl text-gray-400 line-through">₹39,999</span>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Complete CLAT Syllabus Coverage</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> 20+ Full-Length Mock Tests</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Personal Mentorship Sessions</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> 24/7 Doubt Support</div>
            </div>
          </div>
        </div>

        <div className="sticky top-24 max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Register Now & Get Free Demo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-start mb-1">Full Name *</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-start mb-1">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium text-start mb-1">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-start mb-1">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any specific questions or requirements?"
            rows={3}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold py-2 rounded-md"
        >
          Register Now - Get Free Demo
        </button>

        <p className="text-xs text-gray-500 text-center mt-2">
          By registering, you agree to our Terms & Conditions and Privacy Policy
        </p>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Crashcourse;
