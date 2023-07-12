import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Store from './pages/store';


function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Layout />}>
        <Route index element={ <Home /> } />
        <Route path='store' element={ <Store /> } />
        <Route path='about' element={ <About /> } />
        <Route path='contact' element={ <Contact /> } />
      </Route>
      </Routes>
  </BrowserRouter>
  </>
}

export default App;
