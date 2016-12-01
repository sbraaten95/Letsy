var users = require('../controllers/users.js');
var investments = require('../controllers/investments.js');
var stocks = require('../controllers/stocks.js');

module.exports = (app) => {
	app.get('/users', users.index); //Allow for a user to set himself as undetectable
	app.post('/users', users.create);
	// app.get('/investments', investments.index);
	// // ^ the returned investments should only be those that the user manages, as well as investments that other users have explicitly allowed this user to see
	// app.get('/stocks', stocks.index); //This will always return all stocks
}