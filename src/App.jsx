import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import PoliticaPrivacidad from "./pages/politica-privacidad/PoliticaPrivacidad";
import PoliticaCookies from "./pages/politica-cookies/PoliticaCookies";
import Blog from "./pages/blog/Blog";
import Article from "./pages/blog/Article";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="politica-cookies" element={<PoliticaCookies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
