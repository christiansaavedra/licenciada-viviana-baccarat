import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="servicios"
            element={
              <div style={{ padding: "4rem 0" }}>
                <div className={styles.container}>
                  <h1>Servicios</h1>
                </div>
              </div>
            }
          />
          <Route
            path="contacto"
            element={
              <div style={{ padding: "4rem 0" }}>
                <div className="container">
                  <h1>Contacto</h1>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
