import './App.css';
import Navbar     from './components/Navbar/Navbar.jsx';
import Hero       from './components/Hero/Hero.jsx';
import About      from './components/About/About.jsx';
import Activities from './components/Activities/Activities.jsx';
import WhyUs      from './components/WhyUs/WhyUs.jsx';
import Contact    from './components/Contact/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <WhyUs />
        <Contact />
      </main>
    </>
  );
}

export default App;