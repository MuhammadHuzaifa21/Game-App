import dotenv from 'dotenv'

import express from 'express';
import cors from 'cors';
import connectDB from './model/connect';
import game from './model/game';
import category from './model/category';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// GET
app.get('/games', async (req, res) => {
    try {
        const result = await game.find();

        if (!result) {
            return res.status(404).json({
                message: "No games found"
            });
        }

        res.status(200).json(result);

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

app.post('/games', (req, res) => {
    game.create(req.body).then(() => {
        res.send('Record inserted...')
    })
})

// PUT
app.put('/games/:id', (req, res) => {
    game.findByIdAndUpdate(req.params.id, req.body)
})

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on Port: ${PORT}`)
        })
    } catch (error) {
        console.log("Server Error:", error.message);
    }
}

startServer();