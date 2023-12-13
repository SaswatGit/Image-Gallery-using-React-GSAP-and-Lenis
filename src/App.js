import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from '@studio-freight/lenis'
import Footer from './components/Footer';
import Canvas from './components/Canvas';

function App() {
  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0);

  
  return (
    <BrowserRouter>
    <Canvas />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
