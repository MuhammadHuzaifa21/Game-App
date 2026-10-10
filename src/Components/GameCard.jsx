import { Link } from "react-router-dom";

export default function GameCard({ prop }) {
    return (
        <>
            <div className="col-md-3" key={prop.Id} >
                <Link to={`/gameDetail/${prop.Id}`} style={{ textDecoration: "none" }}>
                    <div className="card h-100 shadow-sm hover-card">
                        <div className="card-body text-center">
                            <div className="display-6">
                                <img
                                    src={prop.Image}
                                    className="d-block mx-auto"
                                    alt="Game Image"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                            </div>
                            <h5 className="card-title">{prop.Name}</h5>
                            <p className="card-text text-muted"><strong>Rs: {prop.Price}</strong></p>
                            <p className="card-text text-muted"><strong>Category:</strong> {prop.Category}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}