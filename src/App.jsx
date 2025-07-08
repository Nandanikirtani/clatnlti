import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Course from './components/Course'
import Crashcourse from './components/Crashcourse'
import Democlasses from './components/Democlasses'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Hero />
        <Course />
        <Crashcourse />
        <Democlasses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
