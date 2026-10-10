import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import SGDB from "steamgriddb";

// ======================================================
// YOUR STEAMGRIDDB API KEY
// ======================================================

const API_KEY = "f528c1a918dcdb33ce310b528b09a0be";

console.log("API KEY LENGTH:", API_KEY.length);
console.log("API KEY START:", API_KEY.substring(0, 5));

// ======================================================
// PATH SETUP
// ======================================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JSON_FILE = path.join(
    __dirname,
    "src",
    "Data",
    "Games.json"
);

const IMAGE_FOLDER = path.join(
    __dirname,
    "public",
    "GamesImg"
);

// ======================================================
// STEAMGRIDDB CLIENT
// ======================================================

const client = new SGDB(API_KEY);

// ======================================================
// DOWNLOAD IMAGE
// ======================================================

function downloadImage(url, filePath) {

    return new Promise((resolve, reject) => {

        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {

            // Handle redirect
            if (
                response.statusCode >= 300 &&
                response.statusCode < 400 &&
                response.headers.location
            ) {

                file.close();

                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }

                return downloadImage(
                    response.headers.location,
                    filePath
                )
                .then(resolve)
                .catch(reject);
            }

            if (response.statusCode !== 200) {

                file.close();

                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }

                reject(
                    new Error(
                        `HTTP ${response.statusCode}`
                    )
                );

                return;
            }

            response.pipe(file);

            file.on("finish", () => {
                file.close();
                resolve();
            });

        }).on("error", (error) => {

            file.close();

            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }

            reject(error);
        });
    });
}

// ======================================================
// MAIN
// ======================================================

async function main() {

    console.log("");
    console.log("========================================");
    console.log("       GAME COVER DOWNLOADER");
    console.log("========================================");
    console.log("");

    if (!API_KEY || API_KEY.trim() === "") {
    console.log("❌ API key is empty.");
    process.exit(1);
}

console.log("✅ API key loaded successfully.");
    // Check Games.json
    if (!fs.existsSync(JSON_FILE)) {

        console.log(
            "❌ ERROR: Games.json not found."
        );

        console.log("");
        console.log("Expected:");
        console.log(JSON_FILE);

        process.exit(1);
    }

    // Create image directory
    if (!fs.existsSync(IMAGE_FOLDER)) {

        fs.mkdirSync(
            IMAGE_FOLDER,
            {
                recursive: true
            }
        );
    }

    // Read JSON
    const games = JSON.parse(
        fs.readFileSync(
            JSON_FILE,
            "utf8"
        )
    );

    console.log(
        `Found ${games.length} games.`
    );

    console.log("");

    let successCount = 0;
    let failedCount = 0;

    // ==================================================
    // PROCESS GAMES
    // ==================================================

    for (let i = 0; i < games.length; i++) {

        const game = games[i];

        console.log(
            `[${i + 1}/${games.length}] ${game.Name}`
        );

        try {

            // ------------------------------------------
            // SEARCH GAME
            // ------------------------------------------

            const results = await client.searchGame(
                game.Name
            );

            if (
                !results ||
                results.length === 0
            ) {

                console.log(
                    "   ❌ Game not found"
                );

                failedCount++;
                continue;
            }

            const foundGame = results[0];

            console.log(
                `   Found: ${foundGame.name}`
            );

            // ------------------------------------------
            // GET PORTRAIT GRIDS
            // ------------------------------------------

            const grids = await client.getGrids({
                type: "game",
                id: foundGame.id,
                dimensions: ["600x900"],
                types: ["static"]
            });

            if (
                !grids ||
                grids.length === 0
            ) {

                console.log(
                    "   ❌ No portrait artwork found"
                );

                failedCount++;
                continue;
            }

            // First result
            const grid = grids[0];

            console.log(
                "   Image found"
            );

            // ------------------------------------------
            // GET ORIGINAL FILE NAME
            // ------------------------------------------

            const originalImagePath =
                game.Image;

            let extension =
                path.extname(
                    originalImagePath
                ).toLowerCase();

            if (
                extension !== ".png" &&
                extension !== ".jpg" &&
                extension !== ".jpeg"
            ) {

                extension = ".png";
            }

            const filename =
                path.basename(
                    originalImagePath,
                    path.extname(originalImagePath)
                ) + extension;

            const outputPath =
                path.join(
                    IMAGE_FOLDER,
                    filename
                );

            // ------------------------------------------
            // SKIP EXISTING
            // ------------------------------------------

            if (fs.existsSync(outputPath)) {

                console.log(
                    `   ⚠ Already exists: ${filename}`
                );

                successCount++;
                continue;
            }

            // ------------------------------------------
            // DOWNLOAD
            // ------------------------------------------

            await downloadImage(
                grid.url,
                outputPath
            );

            console.log(
                `   ✅ Downloaded: ${filename}`
            );

            // Update JSON
            game.Image =
                `/GamesImg/${filename}`;

            successCount++;

        } catch (error) {

            console.log(
                `   ❌ Failed: ${error.message}`
            );

            failedCount++;
        }

        console.log("");

        // Small delay
        await new Promise(
            resolve =>
                setTimeout(resolve, 500)
        );
    }

    // ==================================================
    // SAVE JSON
    // ==================================================

    fs.writeFileSync(
        JSON_FILE,
        JSON.stringify(
            games,
            null,
            2
        ),
        "utf8"
    );

    // ==================================================
    // SUMMARY
    // ==================================================

    console.log("");
    console.log("========================================");
    console.log("              COMPLETE");
    console.log("========================================");
    console.log("");

    console.log(
        `✅ Successful: ${successCount}`
    );

    console.log(
        `❌ Failed:     ${failedCount}`
    );

    console.log("");

    console.log(
        "Images saved to:"
    );

    console.log(
        IMAGE_FOLDER
    );

    console.log("");
}

main();