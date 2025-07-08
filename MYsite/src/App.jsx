import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// Lazy load all major pages
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Services = lazy(() => import('./components/Services/Services'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Team = lazy(() => import('./components/Team/Team'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
