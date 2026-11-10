// Load the trip information from our local JSON file.
const trips = require('../data/trips.json');

// Show the travel page with the trip information.
const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        layout: false,
        trips: trips
    });
};

module.exports = { travel };
