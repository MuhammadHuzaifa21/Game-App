import { readFileSync } from 'node:fs';
import mongoose from 'mongoose';
import connectDB from '../model/connect.js';
import category from '../model/category.js';
import game from '../model/game.js';

const categories = JSON.parse(
    readFileSync(new URL('../../../frontend/src/Data/Category.json', import.meta.url), 'utf8')
);
const games = JSON.parse(
    readFileSync(new URL('../../../frontend/src/Data/Games.json', import.meta.url), 'utf8')
);

const seedData = async () => {
    const categoryRecords = categories.filter(({ categoryId }) => categoryId !== 0);
    const categoryIds = new Set(categoryRecords.map(({ categoryId }) => categoryId));
    const invalidGame = games.find(({ categoryId }) => !categoryIds.has(categoryId));

    if (invalidGame) {
        throw new Error(`Game "${invalidGame.Name}" has an unknown categoryId.`);
    }

    await connectDB();

    try {
        await category.bulkWrite(categoryRecords.map(({ categoryId, categoryName }) => ({
            updateOne: {
                filter: { categoryId },
                update: { $set: { categoryName } },
                upsert: true
            }
        })));

        await game.bulkWrite(games.map((item) => ({
            updateOne: {
                filter: { id: item.Id },
                update: {
                    $set: {
                        id: item.Id,
                        image: item.Image,
                        name: item.Name,
                        price: item.Price,
                        categoryId: item.categoryId,
                        platform: item.Platform,
                        developer: item.Developer,
                        publisher: item.Publisher,
                        releaseDate: item.ReleaseDate,
                        rating: item.Rating,
                        reviewCount: item.ReviewCount,
                        description: item.Description,
                        inStock: item.InStock,
                        stock: item.Stock
                    }
                },
                upsert: true
            }
        })));

        console.log(`Upserted ${categoryRecords.length} categories and ${games.length} games.`);
    } finally {
        await mongoose.disconnect();
    }
};

seedData().catch((error) => {
    console.error('Seeding failed:', error.message);
    process.exitCode = 1;
});
