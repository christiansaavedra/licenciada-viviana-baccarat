import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import PoliticaPrivacidad from "./pages/politica-privacidad/PoliticaPrivacidad";
import PoliticaCookies from "./pages/politica-cookies/PoliticaCookies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="politica-cookies" element={<PoliticaCookies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
