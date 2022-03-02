import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog/Blog';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Academics from './components/pages/Academics/Academics';
import Branches from './components/pages/Branches/Branches';
import Alumni from './components/pages/Alumni/Alumni';


function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/academics" element={<Academics />} /> 
          <Route path="/branches" element={<Branches />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
