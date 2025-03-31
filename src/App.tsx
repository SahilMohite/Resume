import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/1stCarousel';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/2ndCarousel';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import HeaderAbout from './pages/HeaderAbout';
import HeaderContactMe from './pages/HeaderContactMe';
import Projects from './pages/HeaderProjects';
import CardGrid from './components/Services';
import BuyMeCoffee from './pages/BuyMeACoffee';
import PaymentPage from './pages/Payment';
import SocialsPage from './pages/Socials';
import Create from './components/CreateYourPortfolio';
import MyPortfolio from './components/Myportfolio';
import Myservices from './components/Myservices';
import Templates from './pages/Template';




const App: React.FC = () => {
  return (
   
      <Router>
        <div className="App">
          <Header />

          {/* Define Routes for different sections */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<><Carousel /><AboutMe /><Portfolio /><Skills /><Create/><MyPortfolio/><Myservices/><SocialsPage /><CardGrid/></>} />
            <Route path="/about" element={<HeaderAbout />} />
            <Route path="/contact" element={<HeaderContactMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/buy-me-a-coffee" element={<BuyMeCoffee   />} />
            <Route path="/template" element={<Templates   />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<div>404 Not Found</div>} /> {/* Handle 404 */}
          </Routes>
          <Footer />
          <ScrollToTop /> 
        </div>
      </Router>
    
  );
};

export default App;
