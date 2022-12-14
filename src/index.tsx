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
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/example/myFirstComponent';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutMe/aboutMe';
import Footer from './components/footer/footer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/example' element={<SomeExampleComponent />} />
        <Route path='/first' element={<MyFirstComponent />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
