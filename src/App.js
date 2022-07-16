import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { layout, Typography, Space } from "antd";

import "./App.css";

function App() {
  return (
    <Routes>
      <div className="App">
        <div className="navbar">navbar</div>
        <div className="main">main</div>
        <div className="footer">footer</div>
      </div>
      ;
    </Routes>
  );
}

export default App;
