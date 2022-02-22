import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Divisions from './components/Divisions/Divisions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Staff from './components/Staff/Staff';
import Tag from './components/Tag/Tag';
import Topbar from './components/Topbar/Topbar';
import Whyus from './components/Whyus/Whyus';


function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Navbar />
        <Header />
        <News />
        <Tag />
        <Divisions />
        <Whyus />
        <Staff />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
