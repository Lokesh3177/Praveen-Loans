import React from 'react';
import NavBar from './Components/navBar';
import Hero from './Components/Hero';
import Partners from './Components/partners';
import About from './Components/About';
import Services from './Components/services';
import EMICalc from './Components/EmiCalculator';
import WhyChooseUs from './Components/whyChoosUs';
import HowItWorks from './Components/howItsWork';
import ReferEarn from './Components/reffer';
import QuickApply from './Components/ContactForm';
import Contact from './Components/contact';
import FinalCTA from './Components/cta';
import Footer from './Components/Footer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Partners />
                <About />
                <Services />
                <EMICalc />
                <WhyChooseUs />
                <HowItWorks />
                <ReferEarn />
                <QuickApply />
                <Contact />
                <FinalCTA />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;