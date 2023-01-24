const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
	trips: {type:mongoose.Schema.Types.ObjectId, ref:'trips'},
	is_purchased:Boolean
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;