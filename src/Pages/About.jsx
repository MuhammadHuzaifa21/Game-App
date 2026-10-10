// src/pages/About.jsx
import gameData from "../Data/Games.json";

function About() {
  return (
    <>
      {/* Hero Banner */}
      <div
        className="position-relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
        <div className="container h-100 position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 fw-bold text-white text-center">
            About Game Hub
          </h1>
        </div>
      </div>

      {/* About Content */}
      <div className="py-3">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <h2 className="text-primary mb-4">🎮 Who We Are</h2>
                <p className="lead">
                  Welcome to <strong>Game Hub</strong> - your ultimate
                  destination for finding and ordering your favorite games!
                </p>
                <p>
                  We are passionate gamers who created this platform to make it
                  easy for you to discover new games and purchase them at the
                  best prices.
                </p>

                <hr className="my-4" />

                <h2 className="text-primary mb-4">🌟 Why Choose Us</h2>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-2 me-3">🛡️</span>
                      <div>
                        <h5>Trusted Platform</h5>
                        <p className="text-muted">
                          Safe and secure game purchases
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-2 me-3">⚡</span>
                      <div>
                        <h5>Instant Delivery</h5>
                        <p className="text-muted">
                          Get your game keys immediately
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-2 me-3">💰</span>
                      <div>
                        <h5>Best Prices</h5>
                        <p className="text-muted">
                          Competitive pricing on all games
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <span className="fs-2 me-3">🎯</span>
                      <div>
                        <h5>Wide Selection</h5>
                        <p className="text-muted">Huge collection of games</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
