import { useState, useEffect } from 'react';
// import GameCard from '../Components/GameCard';
import GameCardTest from '../Components/GameCardTest';
// import Category from '../Data/Category.json';
// import Game from '../Data/Games.json';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ManageGames() {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const [games, setGames] = useState([]);

    const gameToShow =
        selectedCategoryId === 0
            ? games
            : games.filter((game) => game.categoryId === selectedCategoryId); 

    const fetchCateogries = async () => {
        try {
            const result = await axios.get("http://localhost:3000/category")

            setCategories(result.data.data)
        } catch (error) {
            console.log(error.message);
        }
    }

    // Fetch Games
    const fetchGames = async () => {
        try {
            const result = await axios.get('http://localhost:3000/games');

            if (!result) {
                return (
                    <div className='container'>
                        <h1>No Games Found</h1>
                    </div>
                )
            }
                        
            setGames(result.data.data);
            fetchCateogries();

        } catch (error) {
            console.error("Could not load games.", error)
        }
    }

    useEffect(() => {
        fetchGames();
    }, [])

    return (
        <>
            <div className="container">
                <div className="row g-3 mt-2 text-center">
                    <h1>Category</h1>

                    <div className="d-flex justify-content-center gap-4">
                        <div className="col-auto" key= {0}>
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={() => setSelectedCategoryId(0)}
                            >
                                All
                            </button>
                        </div>

                        {categories.map((item) => (
                            <div className="col-auto" key={item.categoryId}>
                                <button
                                    type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => setSelectedCategoryId(item.categoryId)}
                                >
                                    {item.categoryName}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="row d-flex justify-content-center mb-2 mt-3">
                        <div className="col-lg-12" >
                            <Link to="/addGame" style={{ textDecoration: "none" }}>
                                <div className="card h-100 shadow-sm hover-card ">
                                    <div className="card-body text-center text-success">
                                        <h1 className="card-title">Add New Game</h1>
                                        <p className="card-text text-muted">Click here to add a new game.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Games */}
                    {/* {gameToShow.map((game) => (
                        <GameCardTest key={game._id} prop={game} />
                    ))} */}
                </div>               
                
            </div>
        </>
    )
}