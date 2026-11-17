# Module Four – MongoDB

This module moves the trip information into MongoDB using Mongoose. I kept the same three trips from my earlier project and added the required fields to the JSON file. The dates and prices are sample values for testing.

## Run it on my Mac

1. Start MongoDB locally.
2. Open Terminal in the `travlr` folder and run `npm install`.
3. Run `npm run seed` to load the three trips.
4. Run `npm start` and open `http://localhost:3000/travel`.
5. Check `http://localhost:3000/travel/json` for JSON results.
6. In MongoDB Compass, connect to `mongodb://127.0.0.1:27017` and check `travlr` → `trips`.

The seed script clears the old trips before loading the sample data again. I need to confirm the three documents appear in Compass and the JSON route works before submitting.

## Git

From the main project repository, create `module4` from `module3`, copy these changes into that working tree, and commit/push `module4`.
