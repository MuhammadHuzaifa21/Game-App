import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    categoryId: Number,
    categoryName: String
})

const category = mongoose.model('category', categorySchema);

export default category;