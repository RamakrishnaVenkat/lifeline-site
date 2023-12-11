
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Register from './pages/Register';
function App() {


  return (
    <Router>
      <div>
      
        <Routes>
        <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
