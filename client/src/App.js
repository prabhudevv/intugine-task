import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavBar from "./components/TopNavBar";
import Home from "./components/Home";
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <TopNavBar />
        <Home />
      </Router>
    </div>
  );
}
export default App;