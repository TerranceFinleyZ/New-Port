
import BlurBackground from "./components/BlurBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center">
        <div className="relative z-10">
        <BlurBackground />
          <Navbar />
          <Hero />
          <Projects />
        </div>
      </div>
    </main>
  )
}