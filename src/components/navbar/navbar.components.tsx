import { useState } from "react";
import "./navbar.components.css";

export default function Navbar() {
    const [menuOption, setMenuOption] = useState<boolean>(false)

    const toggleMenu = () => {
        setMenuOption(!menuOption)
    }

  return (
      <div className="navbar">
        <h2>My Portfolio</h2>
        <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul className={menuOption ? "active" : ""}>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Projects</li>
          <li>Games</li>
        </ul>
      </div>
  );
}
