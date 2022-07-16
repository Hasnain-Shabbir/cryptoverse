import { Route, Link } from "react-router-dom";
import { layout, Typography, Space } from "antd";

// Components
import { Navbar } from "./components";

// Styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">main</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
