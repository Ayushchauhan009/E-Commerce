import React from "react";
import { Home, Thankyou } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/thankyou" Component={Thankyou} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
