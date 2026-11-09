// Render the travel page using the Handlebars template.
const travel = (req, res) => {
  res.render('travel', { title: 'Travel', layout: false });
};

module.exports = { travel };
