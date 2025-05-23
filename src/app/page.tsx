'use client'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// const LazyAbout = dynamic(() => import('./components/About'), {
//   ssr: false,
//   loading: () => <p className="text-center">Loading...</p>,
// });

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Qualification/>
      <Projects/>
      <Contact/>
    </div>
  );
}
