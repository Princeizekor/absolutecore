import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
     
     <div className="App">
        <Navbar />
            <Intro />
            <About />
            {/* <Contact /> */}
            {/* <Experience /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
