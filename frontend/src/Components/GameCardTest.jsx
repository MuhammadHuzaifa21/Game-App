import { Link } from "react-router-dom";
import { getCategoryName } from "../Data/category";

export default function GameCard({ prop }) {
    return (
        <>
            <div className="col-md-3" key={prop.id} >
                <Link to={`/gameDetail/${prop.id}`} style={{ textDecoration: "none" }}>
                    <div className="card h-100 shadow-sm hover-card">
                        <div className="card-body text-center">
                            <div className="display-6">
                                <img
                                    src={prop.image}
                                    className="d-block mx-auto"
                                    alt="Game Image"
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                            </div>
                            <h5 className="card-title">{prop.name}</h5>
                            <p className="card-text text-muted"><strong>Rs: {prop.price}</strong></p>
                            <p className="card-text text-muted"><strong>Category:</strong> {getCategoryName(prop.categoryId)}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}