import React from "react";
import { Play, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>

 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
   
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
                🎯 India's Leading CLAT Coaching
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Crack <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CLAT 2026</span>
                <br />with Confidence
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of successful students who achieved their dream ranks with our expert guidance, 
                comprehensive study material, and personalized mentorship.
              </p>
            </div>

        
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-medium px-8 py-3 rounded-lg transition">
                Start Your Journey
              </button>
              <button className="flex items-center border-2 text-blue-600 border-blue-500 px-8 py-3 rounded-lg text-lg hover:bg-blue-50 transition">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

   
            <div className="flex space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Top Ranks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">10K+</div>
                <div className="text-gray-600">Students</div>
              </div>
            </div>
          </div>

      
          <div className="relative">
     
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl rotate-6"></div>

       
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Students studying" 
              className="relative z-10 rounded-3xl shadow-2xl w-full h-96 object-cover"
            />

  
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Live Results</div>
                  <div className="text-sm text-gray-600">AIR 1-100: 45 Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
