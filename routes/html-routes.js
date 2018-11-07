//Using path
const path = require('path');


module.exports = function (app) {

    // Go to index.html to be a default.
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}