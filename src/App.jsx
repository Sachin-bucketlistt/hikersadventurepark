import { useState } from 'react';
import { Modal } from 'antd';
import './App.css';
import Navbar     from './components/Navbar/Navbar.jsx';
import Hero       from './components/Hero/Hero.jsx';
import About      from './components/About/About.jsx';
import Activities from './components/Activities/Activities.jsx';
import WhyUs      from './components/WhyUs/WhyUs.jsx';
import Contact    from './components/Contact/Contact.jsx';

function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const openBooking = (e) => {
    if (e) e.preventDefault();
    setIsBookModalOpen(true);
  };

  return (
    <>
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <About />
        <Activities onBook={openBooking} />
        <WhyUs />
        <Contact />
      </main>

      <Modal
        open={isBookModalOpen}
        onCancel={() => setIsBookModalOpen(false)}
        footer={null}
        width={950}
        centered
        styles={{
          body: {
            padding: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            backgroundColor: '#1c1a17'
          },
          content: {
            padding: 0,
            backgroundColor: '#1c1a17',
            border: '1px solid #2c2924',
            borderRadius: '12px'
          }
        }}
        closeIcon={<span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>×</span>}
      >
        <iframe
          src="https://okghumo.com/hap-hikers-adventure-park"
          title="Hikers Adventure Park Booking"
          style={{
            width: '100%',
            height: '80vh',
            minHeight: '600px',
            border: 'none',
            display: 'block',
            borderRadius: '12px'
          }}
        />
      </Modal>
    </>
  );
}

export default App;