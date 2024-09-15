import NavBar from "./components/NavBar";
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Work/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
