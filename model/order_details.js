const mongoose = require('mongoose');

const order_detail_schema = new mongoose.Schema({
	order_id: {
		type: Number
	},
	product_id: {
		type: Number
	},
	product_name: {
		type: String
	},
	quantity: {
		type: Number
	},
	unit_cost: {
		type: Number
	},
	sub_total: {
		type: NUmber
	}

})

const order_detail = mongoose.model('information_order_detail', order_detail_schema);
module.exports = information_order_detail;