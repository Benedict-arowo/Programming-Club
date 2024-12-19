const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	phone_number: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	skill: {
		type: String,
		required: true,
	},
	background: {
		type: String,
		required: true,
	},
	availability: {
		type: [
			{
				day: { type: String, required: true },
				time: { type: String, required: true },
			},
		],
	},
});

module.exports = mongoose.model("User", UserSchema);
