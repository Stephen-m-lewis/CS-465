// Show the starting page for the website.
const index = (req, res) => {
  res.render('index', { title: 'Travlr' });
};

module.exports = { index };
