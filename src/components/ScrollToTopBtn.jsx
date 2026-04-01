import { useEffect, useState } from "react";

function ScrollToTopBtn() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="scroll-to-top-btn"
      style={{
        position: "fixed",
        right: 28,
        bottom: 28,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.85)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        border: "1.5px solid #e0e0e0",
        color: "#b65700",
        fontSize: 28,
        zIndex: 99,
        cursor: "pointer",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 0.3s"
      }}
      aria-label="回到頂部"
      onClick={handleClick}
    >
      ↑
    </button>
  );
}

export default ScrollToTopBtn;