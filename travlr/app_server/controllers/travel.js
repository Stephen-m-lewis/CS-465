const fs = require('fs');
const path = require('path');

// Read the trip information from our JSON file.
const tripsFile = path.join(__dirname, '../data/trips.json');

// Show the travel page using our trip data.
const travel = (req, res, next) => {
    try {
        const trips = JSON.parse(fs.readFileSync(tripsFile, 'utf8'));

        res.render('travel', {
            title: 'Travel',
            layout: false,
            trips: trips
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { travel };
