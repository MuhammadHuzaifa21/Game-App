import dotenv from 'dotenv'

import express from 'express';
import cors from 'cors';
import connectDB from './model/connect.js';
import game from './model/game.js';
import category from './model/category.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// -------- //
// CATEGORY
// GET
app.get('/category', async (req, res) => {
    try {
        const result = await category.find();

        if (!result) {
            return res.status(404).json({
                message: "No Category Found."            
            })
        }

        res.status(200).json({
            message: "Categories Found.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// GET by ID
app.get('/category/:id', async (req, res) => {
    try {
        const result = await category.find({categoryId: req.params.id});

        if (!result) {
            return res.status(404).json({
                message: "No Category Found."            
            })
        }

        res.status(200).json({
            message: "Categories Found.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// ----- //
// GAMES
// GET
app.get('/games', async (req, res) => {
    try {
        const result = await game.find();

        if (!result) {
            return res.status(404).json({
                message: "No games found"
            });
        }

        res.status(200).json({
            message: "Fetched Successfully.",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// GET by ID
app.get('/games/:id', async (req, res) => {
    try {
        const result = await game.find({_id: req.params.id});

        if (!result) {
            return res.status(404).json({
                message: "No game found"
            });
        }

        res.status(200).json({
            message: "Fetched Successfully.",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// POST
app.post('/games', async (req, res) => {
    try {
        const result = await game.create(req.body);        

        res.status(200).json({
            message: "Record Inserted Successfully.",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})

// PUT
app.put('/games/:id', async (req, res) => {
    try {
        const result = await game.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            message: "Record Updated Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

// DELETE
app.delete('/games/:id', async (req, res) => {
    try {
        const result = await game.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Record Deleted Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log("Server Error:", error.message);
    }
}

startServer();