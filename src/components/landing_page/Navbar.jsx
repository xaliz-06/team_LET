import letmainlogo from "../../assets/letmainlogo.png";

import { Link } from "react-router-dom";

// import "../../routes/route-styles/styles1.module.css";

export default function Navbar() {
  return (
    <nav>
      <a href="#">
        <img id="logo" src={letmainlogo} />
      </a>
      <ul className="list-container">
        <a href="#section1">
          <li>Home</li>
        </a>
        <a href="#carousal-box">
          <li>Why Us</li>
        </a>
        <a href="#section-4">
          <li>About</li>
        </a>
        <a href="#section5">
          <li>Contact</li>
        </a>
      </ul>

      <div>
        <ul className="authenticate">
          <Link to="/home">
            <li>LOG IN</li>
          </Link>
          <a>
            <li>SIGN IN</li>
          </a>{" "}
        </ul>
      </div>
    </nav>
  );
}
