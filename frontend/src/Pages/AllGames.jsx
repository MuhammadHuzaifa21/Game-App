import { useState, useEffect } from 'react';
import GameCard from '../Components/GameCard';
import Category from '../Data/Category.json';
import Game from '../Data/Games.json';
import axios from 'axios';

export default function AllGames() {
    const [categoryId, setCategoryId] = useState(0);
    const [games, setGames] = useState([]);

    let gameToShow;

    if (categoryId === 0) {
        gameToShow = Game
    } else {
        gameToShow = Game.filter(game => game.categoryId === categoryId);
    }

    const fetchGames = async () => {
        try {
            const result = await axios.get('http://localhost:3000/games');

            if (result.data.data) {
                console.log(result.data.data);    
            }
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

                        {Category.map((item) => (
                            <div className="col-auto" key={item.categoryId}>
                                <button
                                    type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => setCategoryId(item.categoryId)}
                                >
                                    {item.categoryName}
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    {/* Games */}
                    {gameToShow.map((game) => (
                        <GameCard key={game.Id} prop={game} />
                    ))}
                </div>               
                
            </div>
        </>
    )
}