import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="text-white py-4 mt-5"
        style={{
          background: "linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e)",
          borderTop: "3px solid #0d6efd",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center text-md-center">
              <p className="text-secondary mb-0">
                &copy; 2026 Game Arena. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
