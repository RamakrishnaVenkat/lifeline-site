import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
