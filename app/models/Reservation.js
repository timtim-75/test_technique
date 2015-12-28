var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  	restaurant: String,
	date: Date,
	hour: String,
	number: Number,
	clientName: String,
	clientNumber: String,
  	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reservation', ReservationSchema);