import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/Home';
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from './pages/login/login';
import SucsessAlert from './components/sucsessAlert/SucsessAlert';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Alert" element={<SucsessAlert/>}/>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
