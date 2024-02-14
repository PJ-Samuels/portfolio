import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/portfolio2/" element={<Home />} />
        <Route path="/portfolio2/about" element={<About />} />
        <Route path="/portfolio2/contact" element={<Contact />} />
        <Route path="/portfolio2/projects" element={<Projects />} />
        <Route path="/portfolio2/technologies" element={<Technologies />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
