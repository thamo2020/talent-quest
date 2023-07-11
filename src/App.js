
import './App.css';

import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Interview from './Components/Interview/Interview';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import { useContext } from "react";
import { themeContext } from "./Context";
import Joblist from './Components/Joblist/Joblist';
import { ThemeProvider } from './ThemeContext';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar />
      <Intro />
     <Interview/>
     <About />
     <Testimonials />
     <Joblist />
     <Contact />
     <Footer />
      
    
    </div>
  );
}

export default App;
