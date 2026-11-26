import React from 'react'
import { Link } from 'react-router-dom'

function ManageGamessss() {
    return (
        <>
            <div className="container mt-5">
                
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 mb-5" >
                        <Link to="/addGame" style={{ textDecoration: "none" }}>
                            <div className="card h-100 shadow-sm hover-card">
                                <div className="card-body text-center">
                                    <h1 className="card-title">Add New Game</h1>
                                    <p className="card-text text-muted">Click here to add a new game.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 mb-5" >
                        <Link to="/editGame" style={{ textDecoration: "none" }}>
                            <div className="card h-100 shadow-sm hover-card">
                                <div className="card-body text-center">
                                    <h1 className="card-title">Edit Game</h1>
                                    <p className="card-text text-muted">Click here to edit a game information.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 mb-5" >
                        <Link to="/deleteGame" style={{ textDecoration: "none" }}>
                            <div className="card h-100 shadow-sm hover-card">
                                <div className="card-body text-center">
                                    <h1 className="card-title">Delete Game</h1>
                                    <p className="card-text text-muted">Click here to delete a game from the list.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageGamessss
