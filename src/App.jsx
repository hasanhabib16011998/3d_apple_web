import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <main className="bg-black">
      {/* Navbar */}
      <NavBar/>
      {/* hero */}
      <Hero/>
      {/* highlights */}
      <Highlights/>
    </main>
  )
}