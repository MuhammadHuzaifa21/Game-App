import { useParams } from "react-router-dom"
// import Game from '../Data/Games.json'
import GameCard from "../Components/GameCard";
import { getCategoryName } from "../Data/category";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {inc, dec, reset} from '../Redux/counterSlice'
import axios from "axios";

export default function GameDetail() {
    const [games, setGames] = useState([]);

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const {id} = useParams();
    const detail = games.find((item) => item.id == id);

    //const [count, setCount] = useState(1);

    const fetchGames = async () => {
        try {
            const result = await axios.get("http://localhost:3000/games");

            setGames(result.data.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchGames();
    }, [])

    if (!detail) {
        return <h2>Game not found.</h2>;
    }

    const categoryName = getCategoryName(detail.categoryId);

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {/* Game Image */}
                    <div className="col-md-6 border text-center">
                        <img src={detail.image} className="img-fluid rounded" alt={detail.name} 
                            style={{maxWidth: "400px"}} />
                    </div>

                    {/* Game Detail */}
                    <div className="col-md-6 mt-5">
                        <h1>{detail.name}</h1>

                        <div className="mb-3|">
                            ⭐⭐⭐⭐⭐
                            <span className="ms-2">
                                {detail.rating} ({detail.reviewCount} Reviews)
                            </span>
                        </div>

                        <h3>Rs. {detail.price}</h3>

                        <p>
                            <strong>Category:</strong> {categoryName}
                        </p>

                        <p>
                            <strong>Platform:</strong> {detail.platform}
                        </p>
                        
                        <p>
                            <strong>Developer:</strong> {detail.developer}
                        </p>
                        
                        <p>
                            <strong>Publisher:</strong> {detail.publisher}
                        </p>
                        
                        <p>
                            <strong>Release Date:</strong> {detail.releaseDate}
                        </p>
                        
                        {/* Quantity */}
                        <div className="d-flex align-item-center mb-3">
                            {count > 1 ?
                                <button className="btn btn-outline-secondary" onClick={() => dispatch(dec())}> - </button>
                                : <button className="btn btn-outline-secondary"> - </button>
                            }
                            <span className="mx-3 mt-2">
                                <strong>{count}</strong>
                            </span>

                            {count < detail.stock ?
                                <button className="btn btn-outline-secondary" onClick={() => dispatch(inc())}> + </button>
                                : <button className="btn btn-md btn-outline-secondary"> + </button>
                            }
                        </div>
                        {/* <div className="d-flex align-item-center mb-3">
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
                        </div> */}

                        <p>
                            <strong>In Stock:</strong> {detail.stock}
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
                        {detail.description}
                    </p>
                </div>

                {/* Game Information */}
                <div className="mt-5">
                    <h2>Game Information</h2>

                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Category</th>
                                <td>{categoryName}</td>
                            </tr>
                            
                            <tr>
                                <th>Platform</th>
                                <td>{detail.platform}</td>
                            </tr>
                            
                            <tr>
                                <th>Developer</th>
                                <td>{detail.developer}</td>
                            </tr>
                            
                            <tr>
                                <th>Publisher</th>
                                <td>{detail.publisher}</td>
                            </tr>

                            <tr>
                                <th>Release Date</th> 
                                <td>{detail.releaseDate}</td> 
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

                    {[...games]
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 4)
                        .map((item) => (
                        <GameCard key={item.id} prop={item} />
                    ))}
                </div>

            </div>
        </>
    );
}