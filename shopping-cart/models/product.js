const mongoose = require('mongoose');
const assert      = require('assert');
const Schema = mongoose.Schema;

var schema = new Schema({
	imagePath	: {type:String, required: true},
	title	 	: {type:String, required:true},
	description	: {type:String, required:true},
	price		: {type:Number, required:true}
});

const Product = mongoose.model('Product', schema);
module.exports = Product;