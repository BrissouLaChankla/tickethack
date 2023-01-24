const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
	departure:String,
	arrival:String,
	date:Date,
	price:Number
});

const Trip = mongoose.model('trips', TripSchema);

module.exports = Trip;