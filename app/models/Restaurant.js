var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  	name: String,
	address: String,
	capacity: Number,
	pictures:[],
	description: String,
	tags:[],
	access : {
		login: String,
		password: String,
	},
	schedule:{
		monday:{
			schedulable : Boolean,
			start: String,
			end: String

		},
		tuesday:{
			schedulable : Boolean,
			start: String,
			end: String

		},
		wednesday:{
			schedulable : Boolean,
			start: String,
			end: String

		},
		thursday:{
			schedulable : Boolean,
			start: String,
			end: String

		},
		friday:{
			schedulable : Boolean,
			start: String,
			end: String

		},
		saturday:{
			schedulable : Boolean,
			start: String,
			end: String

		},
		sunday:{
			schedulable : Boolean,
			start: String,
			end: String

		}
	},
  	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);