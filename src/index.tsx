import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.module.scss';
import MyCV from './components/sites/CV/cv';
import Myprojects from './components/sites/projects/projects'
import Navbar from './components/navbar/navbar';
import AboutMe from './components/sites/aboutMe/aboutMe'
import Footer from './components/footer/footer';
import Contact from './components/sites/contact/contact';
import './i18n'; //Import the i18n configuration
import ScrollToTop from './components/scrollTop/scrollTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/CV' element={<MyCV />} />
        <Route path='/Projects' element={<Myprojects />} />
        <Route path='/Aboutme' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
