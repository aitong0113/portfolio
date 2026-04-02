
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./LogoFont.css";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 點擊連結後自動關閉選單（for mobile）
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/#/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>Abbie Lin</Link>
      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        <Link to="/#/" className={location.pathname === "/" ? "active" : ""} onClick={handleLinkClick}>關於</Link>
        <Link to="/#/portfolio" className={location.pathname.startsWith("/portfolio") ? "active" : ""} onClick={handleLinkClick}>作品</Link>
        <Link to="/#/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={handleLinkClick}>聯絡</Link>
      </div>
      <div className={`hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen((prev) => !prev)}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}

export default Navbar;