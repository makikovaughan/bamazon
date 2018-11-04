// Requiring our models
const db = require('../models');

module.exports = function(app) {

  // GET route for retrieving all authors
//   app.get('/api/*', function(req, res) {

    // Here we add an 'include' property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Article
    // console.log(db);
    // db.Product.findAll({
    //   include: [db.Product]
    // }).then(function(dbAuthor) {
    //   res.json(dbAuthor);
    // }).catch(function(error) {
    //   res.json({ error: error });
    // });
//   });

}