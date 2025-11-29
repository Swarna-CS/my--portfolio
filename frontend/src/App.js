import React, { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Information from './components/Information';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  const svgData = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" stroke="#FFF" stroke-width="2">
      <circle cx="14" cy="14" r="8.5"></circle>
      <path d="M1 12h5M18 12h5M12 6V1.04M12 23v-4.96M11.95 11.95h.1v.1h-.1z"></path>
    </g>
  </svg>
`;

const encodedSvg = encodeURIComponent(svgData).replace(/'/g, "%27").replace(/"/g, "%22");
const cursorUrl = `url("data:image/svg+xml,${encodedSvg}") 12 12, auto`;


useEffect(() => {
  document.body.classList.add('custom-cursor');

  // Clean up by removing the class when the component unmounts
  return () => {
    document.body.classList.remove('custom-cursor');
  };
}, []);

  return (
    <div className=' overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>
      <div className=' fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
      <NavBar/>
      <Information/>
      {/* <About/> */}
      <Technologies/>
      <Experiance/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
