// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:id?" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
