import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-lg"
        style={{
          background: "linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e)",
          borderBottom: "3px solid #0d6efd",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold fs-2"
            to="/"
            style={{
              color: "#0d6efd",
            }}
          >
            🎮 Games Hub
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fw-semibold mx-2" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold mx-2" to="/allGames">
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold mx-2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold mx-2" to="/contact">
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link fw-bold px-4"
                  to="/board"
                  style={{
                    background: "#0d6efd",
                    borderRadius: "25px",
                    color: "white !important",
                    marginLeft: "10px",
                  }}
                >
                  🎯 Play Now
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
