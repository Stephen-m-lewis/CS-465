const Trip = require('../models/travlr');

// Get the trips from MongoDB and show them on the travel page.
const travel = async (req, res, next) => {
  try {
    const trips = await Trip.find({}).lean();
    res.render('travel', { title: 'Travel', layout: false, trips });
  } catch (err) {
    next(err);
  }
};

// Return the trip records as JSON so we can check the database output.
const tripsJSON = async (req, res, next) => {
  try {
    const trips = await Trip.find({}).lean();
    res.json(trips);
  } catch (err) {
    next(err);
  }
};

module.exports = { travel, tripsJSON };
