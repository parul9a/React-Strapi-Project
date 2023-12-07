import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Navlinks from "./Navlinks";
export default function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav>
      <div className="nav-center" onMouseOver={handleSubmenu}>
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </nav>
  );
}
