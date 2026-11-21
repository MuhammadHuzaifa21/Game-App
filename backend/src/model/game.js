import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
    id: Number,
    image: String,
    name: String,
    price: Number,
    categoryId: Number,
    platform: String,
    developer: String,
    publisher: String,
    releaseDate: String,
    rating: Number,
    reviewCount: Number,
    description: String,
    inStock: Boolean,
    stock: Number
})

const game = mongoose.model('game', gamesSchema);

export default game;