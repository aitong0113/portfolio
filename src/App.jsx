import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";


import ScrollToTopBtn from "./components/ScrollToTopBtn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import About from "./sections/About";
import Portfolio from "./pages/PortfolioList";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

// 🔥 滾動回頂
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// 🔥 動畫路由（重點）
function AnimatedRoutes() {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [location.pathname]);

  return (
    <div id="page-container" ref={containerRef}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </div>
  );
}


// 🔥 主 App
function App() {
  return (
    <HashRouter>
      <Navbar />
      <ScrollToTop />

      {/* ⭐ 核心：動畫包在這 */}
        <AnimatedRoutes />
        <Footer />
      <ScrollToTopBtn />
    </HashRouter>
  );
}

export default App;