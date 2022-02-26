import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Academics from './components/pages/Academics/Academics';


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
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
