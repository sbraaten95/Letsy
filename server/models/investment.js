var mongoose = require('mongoose');

var InvestmentSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	stock: {type: mongoose.Schema.Types.ObjectId, ref: 'Stock'},
	quantity: Number
});

var Investment = mongoose.model('Investment', InvestmentSchema);