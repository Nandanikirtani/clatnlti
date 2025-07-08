import React, { useState } from 'react';
import { Play, Clock, Eye, Star } from 'lucide-react';

const Democlasses = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenVideo = (url) => {
    setSelectedVideo(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setShowModal(false);
  };

  const demoVideos = [
    {
      id: 1,
      title: "English Language & Comprehension",
      instructor: "Dr. Priya Sharma",
      duration: "45 mins",
      views: "12.5K",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Master reading comprehension and grammar fundamentals for CLAT"
    },
    {
      id: 2,
      title: "Legal Reasoning Fundamentals",
      instructor: "Adv. Rajesh Kumar",
      duration: "55 mins",
      views: "18.2K",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Learn the basics of legal reasoning and case analysis"
    },
    {
      id: 3,
      title: "Logical Reasoning Tricks",
      instructor: "Prof. Meera Jain",
      duration: "40 mins",
      views: "9.8K",
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Quick tricks and shortcuts for logical reasoning problems"
    },
    {
      id: 4,
      title: "Current Affairs Strategy",
      instructor: "Mr. Vikash Singh",
      duration: "35 mins",
      views: "15.6K",
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Effective approach to current affairs preparation"
    },
    {
      id: 5,
      title: "Quantitative Techniques",
      instructor: "Dr. Ankita Gupta",
      duration: "50 mins",
      views: "11.3K",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Mathematical problem-solving techniques for CLAT"
    },
    {
      id: 6,
      title: "Mock Test Analysis",
      instructor: "Adv. Suresh Patel",
      duration: "60 mins",
      views: "8.9K",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "How to analyze and improve from mock test performance"
    }
  ];

  return (
    <section id="demo" className="bg-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">Free Demo Classes</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our teaching methodology with these comprehensive demo sessions from expert faculty
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoVideos.map((video) => (
            <div key={video.id} className="border rounded-xl overflow-hidden shadow group hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 sm:h-52 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">FREE</div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleOpenVideo(video.videoUrl)}
                    className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded flex items-center backdrop-blur hover:bg-white/30"
                  >
                    <Play className="w-5 h-5 mr-2" /> Watch Demo
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg sm:text-xl mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">{video.description}</p>
                <p className="text-sm sm:text-base text-primary font-medium mb-2">{video.instructor}</p>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{video.rating}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenVideo(video.videoUrl)}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded hover:opacity-90 flex items-center justify-center text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Free Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Want to see more? Get access to our complete video library with any course enrollment.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded hover:opacity-90 text-sm sm:text-base">
            Enroll Now for Full Access
          </button>
        </div>
      </div>

   
      {showModal && selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={selectedVideo}
              title="Demo Video"
              className="w-full h-full"
              allowFullScreen
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-xl bg-black/70 px-3 py-1 rounded-full hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Democlasses;
