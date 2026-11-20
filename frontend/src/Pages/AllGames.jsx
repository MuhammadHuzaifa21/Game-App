import { useState } from 'react';
import GameCard from '../Components/GameCard'
import Category from '../Data/Category.json'
import Game from '../Data/Games.json'

export default function AllGames() {
    const [cat, setCat] = useState("All");

    let selectedCategory = cat;
    let gameToShow;

    if (selectedCategory === "All") {
        gameToShow = Game
    } else {
        gameToShow = Game.filter(game => game.Category === selectedCategory);
    }

    return (
        <>
            <div className="container">
                <div className="row g-3 mt-2 text-center">
                    <h1>Category</h1>

                    <div className="d-flex justify-content-center gap-4">

                        {Category.map((item) => (
                            <div className="col-auto" key={item.CategoryName}>
                                <button
                                    type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => setCat(item.CategoryName)}
                                >
                                    {item.CategoryName}
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