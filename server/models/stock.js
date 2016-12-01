var mongoose = require('mongoose');

var StockSchema = new mongoose.Schema({
	name: String,
	value: Number
});

var Stock = mongoose.model('Stock', StockSchema);