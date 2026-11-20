import { Link } from "react-router-dom";
import hero from "../Data/Hero.json";
import Game from "../Data/Games.json";
import GameCard from "../Components/GameCard";

function Home() {
  return (
    <>
      {/* Hero Section with Gaming Background */}
      <div
        className="position-relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "600px",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        ></div>

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center min-vh-75 mg-5">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold text-white">
                Welcome to Games Hub
              </h1>
              <p className="lead fs-4 text-light">
                Find your favorite game and Order now!
              </p>
              <button className="btn btn-primary btn-lg px-3 mt-3 shadow">
                <Link className="nav-link fw-semibold" to="/allGames">
                  Explore
                </Link>
              </button>
            </div>

            <div className="col-lg-6">
              {/* Small Carousel */}
              <div
                id="smallCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  {hero.map((item, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                      <img
                        src={item.Image}
                        className="d-block w-100"
                        alt="Gaming 1"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#smallCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#smallCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>

                {/* Indicators */}
                <div
                  className="carousel-indicators"
                  style={{ bottom: "-30px" }}
                >
                  <button
                    type="button"
                    data-bs-target="#smallCarousel"
                    className="active"                    
                    aria-current="true"
                    data-bs-slide-to="0"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#smallCarousel"
                    data-bs-slide-to="1"                    
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#smallCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container">
        <div className="row g-3 mt-2">
          {Game.filter((item) => item.Id < 9)
            .map((item) => (            
              <GameCard prop={item} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
