// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import ThankYou from "./components/ThankYou/thankyou";
import ClientInfo from "./components/ClientInfo/clientInfo";
import AppContextProvider from "./AppContext";
import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons(); // This initializes the default set of Fluent UI icons

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/:id?" element={<ClientInfo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;
