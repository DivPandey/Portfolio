import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Skills from './Skills';
import proficiency from './proficiency';
import Education from './Education';
import Achievements from './Achievements';
import Blogs from './Blogs';
import Contacts from './Contacts';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Skills />
      <proficiency />
      <Education />
      <Achievements />
      <Blogs />
      <Contacts />
    </div>
  );
}

export default App;
