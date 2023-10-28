import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";



export default function Home() {
  return (
    <main className="bg-gradient-to-r from-teal-700 via-cyan-700 to-amber-700">
      
      <About />
      <Hobbies />
      <Contact />

    </main>
  )
}
