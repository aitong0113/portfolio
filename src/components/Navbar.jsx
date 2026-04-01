import { Link, useLocation } from "react-router-dom";
import "./LogoFont.css";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>Abbie Lin</Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>關於</Link>
        <Link to="/portfolio" className={location.pathname.startsWith("/portfolio") ? "active" : ""}>作品</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>聯絡</Link>
      </div>
    </nav>
  );
}

export default Navbar;