import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddGames() {
    const [categories, setCategories] = useState([]);

    const fetchCateogries = async () => {
        try {
            const result = await axios('http://localhost:3000/category');

            setCategories(result.data.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchCateogries();
    }, [])

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            {/* Hero Banner */}
            <div
                className="position-relative"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200")',
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
                        Add New Game
                    </h1>
                </div>
            </div>

            {/* Contact Content */}
            <div className="container py-5">
                <form onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <span className="input-group-text">Name</span>
                        <input type="text" className="form-control" name='name' onChange={handleChange} />
                        &nbsp; &nbsp;
                        <span className="input-group-text">Price</span>
                        <input type="number" className="form-control" name='price' onChange={handleChange} />
                        &nbsp; &nbsp;
                        <span for="fieldSelect" className="input-group-text">Category</span>
                        {/* <input type="text" className="form-control" name='category' onChange={handleChange} /> */}
                        <select class="form-control" id="fieldSelect" name='category' onChange={handleChange}>
                            <option selected>Choose one…</option>
                            {categories.map((item) => (
                                <option value={item.categoryId}>{item.categoryName}</option>
                            ))}
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <span className="input-group-text">Platform</span>
                        <input type="text" className="form-control" name='platform' onChange={handleChange} />
                        &nbsp; &nbsp;
                        <span className="input-group-text">Developer</span>
                        <input type="text" className="form-control" name='developer' onChange={handleChange} />
                        &nbsp; &nbsp;
                        <span className="input-group-text">Publisher</span>
                        <input type="text" className="form-control" name='publisher' onChange={handleChange} />
                    </div>

                    <div class="input-group mb-3">
                        <span className="input-group-text">ReleaseDate</span>
                        <input type="date" className="form-control" name='releaseDate' onChange={handleChange} />
                        &nbsp; &nbsp;
                        <span className="input-group-text">Rating</span>
                        <input type="Number" className="form-control" name='rating' onChange={handleChange} />
                        &nbsp; &nbsp;
                        <span className="input-group-text">ReviewCount</span>
                        <input type="number" className="form-control" name='reviewCount' onChange={handleChange} />
                    </div>

                    <div class="input-group mb-3">
                        <span className="input-group-text">Description</span>
                        <input type="text" className="form-control" name='description' onChange={handleChange} />
                        &nbsp; &nbsp;
                        <span className="input-group-text">Stock</span>
                        <input type="number" className="form-control" name='stock' onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100 shadow" >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddGames
