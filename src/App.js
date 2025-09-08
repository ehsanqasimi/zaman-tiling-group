import './assets/styles/style.scss';
import 'animate.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Galleries from './components/Galleries';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Galleries />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
