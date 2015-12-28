var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  	restaurant: String,
	date: String,
	hour: String,
	number: String,
	clientName: String,
	clientNumber: String,
  	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reservation', ReservationSchema);