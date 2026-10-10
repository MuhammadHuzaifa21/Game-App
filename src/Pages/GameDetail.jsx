import { useParams } from "react-router-dom"
import Game from '../Data/Games.json'
import GameCard from "../Components/GameCard";
import { useState } from "react";
import { Cursor } from "mongoose";

export default function GameDetail() {
    const {id} = useParams();
    const detail = Game.find((item) => item.Id == id);

    const [count, setCount] = useState(1);

    if (!detail) {
        return <h2>Game not found.</h2>;
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {/* Game Image */}
                    <div className="col-md-6 border text-center">
                        <img src={detail.Image} className="img-fluid rounded" alt={detail.Name} 
                            style={{maxWidth: "400px"}} />
                    </div>

                    {/* Game Detail */}
                    <div className="col-md-6 mt-5">
                        <h1>{detail.Name}</h1>

                        <div className="mb-3|">
                            ⭐⭐⭐⭐⭐
                            <span className="ms-2">
                                {detail.Rating} ({detail.ReviewCount} Reviews)
                            </span>
                        </div>

                        <h3>Rs. {detail.Price}</h3>

                        <p>
                            <strong>Category:</strong> {detail.Category}
                        </p>

                        <p>
                            <strong>Platform:</strong> {detail.Platform}
                        </p>
                        
                        <p>
                            <strong>Developer:</strong> {detail.Developer}
                        </p>
                        
                        <p>
                            <strong>Publisher:</strong> {detail.Publisher}
                        </p>
                        
                        <p>
                            <strong>Release Date:</strong> {detail.ReleaseDate}
                        </p>
                        
                        {/* Quantity */}
                        <div className="d-flex align-item-center mb-3">
                            {count > 1 ?
                                <button className="btn btn-outline-secondary" onClick={() => setCount(count - 1)}> - </button>
                                : <button className="btn btn-outline-secondary"> - </button>
                            }
                            <span className="mx-3 mt-2">
                                <strong>{count}</strong>
                            </span>

                            {count < 15 ?
                                <button className="btn btn-outline-secondary" onClick={() => setCount(count + 1)}> + </button>
                                : <button className="btn btn-md btn-outline-secondary"> + </button>
                            }
                        </div>

                        <p>
                            <strong>In Stock:</strong> {detail.Stock}
                        </p>

                        {/* Add To Cart */}
                        <button className="btn btn-primary btn-lg">
                            🛒 Add to Cart
                        </button>

                        <button className="btn btn-outline-danger btn-lg ms-2">
                            ❤️ Wishlist
                        </button>

                    </div>
                </div>

                {/* Description */}
                <div className="mt-5">
                    <h2>Description</h2>
                    <p>
                        {detail.Description}
                    </p>
                </div>

                {/* Game Information */}
                <div className="mt-5">
                    <h2>Game Information</h2>

                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Category</th>
                                <td>{detail.Category}</td>
                            </tr>
                            
                            <tr>
                                <th>Platform</th>
                                <td>{detail.Platform}</td>
                            </tr>
                            
                            <tr>
                                <th>Developer</th>
                                <td>{detail.Developer}</td>
                            </tr>
                            
                            <tr>
                                <th>Publisher</th>
                                <td>{detail.Publisher}</td>
                            </tr>

                            <tr>
                                <th>Release Date</th> 
                                <td>{detail.ReleaseDate}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row mt-5">
                    <h2>You May Like</h2>
                    {/* {Game.filter((item) => item.Id > 4 && item.Id < 9)
                        .map((item) => (
                            <GameCard key={item.Id} prop={item} />
                        )
                    )} */}

                    {[...Game]
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 4)
                        .map((item) => (
                        <GameCard key={item.Id} prop={item} />
                    ))}
                </div>

            </div>
        </>
    );
}