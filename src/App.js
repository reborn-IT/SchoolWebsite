import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Academics from './components/pages/Academics/Academics';
import { useState, useEffect } from "react";
import JsonData from './data/data.json';
import {About} from './components/Aboutus/aboutus';
import { Results } from './components/Results/results';


function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<About data={landingPageData.Aboutus} />}/>
          <Route path='/results' element={ <Results />}/>
          <Route path="/academics" element={<Academics />} /> 
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
