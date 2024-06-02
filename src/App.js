import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./modules/navBar/MyNav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages/home_page/HomePage';

import { Route, Routes } from "react-router-dom";
import Footer from "./modules/footer/Footer";
import About from "./modules/myself/about/About";

import EducationJourney from "./modules/myself/Education/EducationJourney";
import ProjectJourney from "./modules/myself/Education/ProjectJourney";
import SocialMedia from "./modules/myself/social_media/SocialMedia";

import PersonalSkill from "./modules/myself/skills/PersonalSkill";
import TechnicalSkill from "./modules/myself/skills/TechnicalSkill";
import Toolkit from "./modules/myself/skills/Toolkit";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />}></Route>
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} />
            <Route path="projectjourney" element={<ProjectJourney />} />
            <Route
              path="educationjourney"
              element={<EducationJourney />}
            ></Route>
            <Route path="socialmedia" element={<SocialMedia />}></Route>
            <Route path="toolkit" element={<Toolkit />}></Route>
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
