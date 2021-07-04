const mongoose = require('mongoose');

const administrator_schema = new mongoose.Schema({
	admin_name: {
		type: String
	},
	email_id: {
		type: String
	}

})

const administrator = mongoose.model('information_administartion', administartion_schema);
module.exports = information_administartion;