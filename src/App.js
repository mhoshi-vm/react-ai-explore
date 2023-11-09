import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Start.js";
import SearchResult from "./SearchResult.js";
import SessionDetails from "./SessionDetails.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/session/:id" element={<SessionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
