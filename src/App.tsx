import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Specialties } from "./components/Specialties";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
