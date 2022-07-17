import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

// Components
import { Navbar } from "./components";

import {
  Exchanges,
  Homepage,
  News,
  CryptoDetails,
  Cryptocurrencies,
} from "./pages/pages";

// Styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              {/* Home Page */}
              <Route path="/" exact element={<Homepage />} />

              {/* Cryptocurrencies Page */}
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

              {/* Exchanges Page */}
              <Route path="/exchanges" element={<Exchanges />} />

              {/* Crypto Page */}
              <Route path="/crypto">
                <Route path=":coinId" element={<CryptoDetails />} />
              </Route>

              {/* News Page */}
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>

      <div className="footer">footer</div>
    </div>
  );
}

export default App;
