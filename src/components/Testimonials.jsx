import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Award } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Sharma",
      college: "NLSIU Bangalore",
      rank: "AIR 45",
      course: "CLAT Foundation Course",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "The faculty at CLAT NLTI is exceptional. Their personalized approach and comprehensive study material helped me secure admission to my dream law school. The mock tests were particularly helpful in building my confidence.",
      year: "2024"
    },
    {
      id: 2,
      name: "Priya Patel",
      college: "NALSAR Hyderabad",
      rank: "AIR 67",
      course: "CLAT Target Batch",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "I joined the Target Batch in my final year and it was the best decision. The intensive preparation and regular doubt clearing sessions helped me improve my score significantly. Highly recommend CLAT NLTI!",
      year: "2024"
    },
    {
      id: 3,
      name: "Rahul Gupta",
      college: "WBNUJS Kolkata",
      rank: "AIR 89",
      course: "CLAT Crash Course",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "The Crash Course was perfect for my last-minute preparation. In just 60 days, I was able to cover the entire syllabus and practice extensively. The faculty's guidance was invaluable in my success.",
      year: "2024"
    },
    {
      id: 4,
      name: "Ananya Singh",
      college: "RGNUL Patiala",
      rank: "AIR 124",
      course: "CLAT Foundation Course",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "The two-year foundation course gave me a solid base in all subjects. The regular assessments and performance analysis helped me identify my weak areas and work on them systematically.",
      year: "2023"
    },
    {
      id: 5,
      name: "Vikash Kumar",
      college: "NLUO Odisha",
      rank: "AIR 156",
      course: "CLAT Target Batch",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "The mentorship program at CLAT NLTI is outstanding. My mentor guided me through every step of the preparation and helped me stay motivated even during tough times. Thank you for making my dream come true!",
      year: "2023"
    },
    {
      id: 6,
      name: "Shreya Jain",
      college: "HNLU Raipur",
      rank: "AIR 203",
      course: "CLAT Foundation Course",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "The study material provided by CLAT NLTI is comprehensive and well-structured. The current affairs section was particularly helpful, and the legal reasoning classes built a strong foundation for my law studies.",
      year: "2023"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700">Success Stories</h2>
          <p className="text-gray-600 mt-2">Hear from students who cracked CLAT</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">5000+</p>
            <p className="text-gray-600">Students Trained</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-pink-600">95%</p>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">500+</p>
            <p className="text-gray-600">Top 100 Ranks</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-600">50+</p>
            <p className="text-gray-600">NLU Selections</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {getVisibleTestimonials().map((t, i) => (
            <div key={t.id} className={`bg-white p-6 rounded-xl shadow border ${i === 1 ? 'scale-105 border-blue-400' : ''}`}>
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                <p className="text-gray-700 pl-6">"{t.testimonial}"</p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.college}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                  <Award className="w-3 h-3 mr-1" /> {t.rank}
                </span>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Course: {t.course}</p>
              <p className="text-xs text-gray-500">Year: {t.year}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button onClick={prevSlide} className="h-10 w-10 rounded-full border p-2 hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={nextSlide} className="h-10 w-10 rounded-full border p-2 hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to start your journey?</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:opacity-90">
            Join CLAT NLTI Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
