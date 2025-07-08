import React from "react";
import { FaCheckCircle, FaUsers, FaRegCalendar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const courses = [
  {
    head: "CLAT Foundation Course",
    time: "Complete 2-Year Program",
    fees: "₹45,999",
    duration: "24 Months",
    students: "30 Students",
    batch: "Starts: 1st April 2025",
    features: [
      "Complete CLAT Syllabus Coverage",
      "Weekly Mock Tests",
      "Personal Mentorship",
      "Study Material Included",
      "Doubt Clearing Sessions",
      "Performance Analysis",
    ],
  },
  {
    head: "CLAT Target Batch",
    time: "Intensive 1-Year Program",
    fees: "₹35,999",
    duration: "12 Months",
    students: "25 Students",
    batch: "Starts: 10th April 2025",
    features: [
      "Focused Exam Preparation",
      "Daily Practice Questions",
      "Subject-wise Tests",
      "Current Affairs Updates",
      "Interview Preparation",
      "Peer Learning Groups",
    ],
  },
  {
    head: "CLAT Crash Course",
    time: "Last-Minute Preparation",
    fees: "₹19,999",
    duration: "60 days",
    students: "30 Students",
    batch: "Starts: 15th April 2025",
    features: [
      "Intensive Daily Classes",
      "Rapid Revision Techniques",
      "High-Yield Topics Focus",
      "Speed & Accuracy Training",
      "Final Mock Tests",
      "Exam Strategy Sessions",
    ],
  },
];

const Course = () => {
  return (
    <section
      id="courses"
      className="bg-gray-100 w-full px-4 sm:px-6 lg:px-20 py-16 mt-20"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug">
        Choose Your <span className="text-blue-500">Success Path</span>
      </h1>

      <p className="text-center text-gray-500 mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
        Comprehensive CLAT preparation courses designed for different preparation
        timelines and learning needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:border hover:border-blue-500 rounded-xl p-6 hover:shadow-xl transition text-start"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-1">{course.head}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-2">{course.time}</p>
            <p className="text-blue-500 text-xl sm:text-2xl font-semibold">
              {course.fees}
            </p>

            <hr className="my-2 text-gray-200" />

            <div className="flex mb-2 items-center text-gray-500 text-sm gap-2">
              <MdAccessTime />
              <p>{course.duration}</p>
            </div>
            <div className="flex mb-2 items-center text-gray-500 text-sm gap-2">
              <FaUsers />
              <p>{course.students}</p>
            </div>
            <div className="flex mb-2 items-center text-gray-500 text-sm gap-2">
              <FaRegCalendar />
              <p>{course.batch}</p>
            </div>

            <hr className="my-2 text-gray-200" />

            <ul className="space-y-2 mb-4">
              {course.features.map((feature, i) => (
                <li key={i} className="flex gap-2 items-start text-gray-600 text-sm sm:text-base">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition text-sm sm:text-base">
              Enroll Now
            </button>
            <button className="w-full border mt-4 border-yellow-500 py-2 rounded-lg hover:bg-yellow-600 hover:text-white transition text-sm sm:text-base">
              Get Free Demo
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
