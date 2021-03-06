'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var generateSequence = function (){
  var result = "";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(var i=0;i<3;i++){
      result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return result;
}
/**
 * National Schema
 */
var NationalSchema = new Schema({
	fullNames: {
		type: String, 
		trim: true
	},
	idNumber: {
		type: String, 
		trim: true
	},
	locationFound: {
		type: String, 
		trim: true
	},
	finderNumber: {
		type: String, 
		trim: true
	},
	posted: {
		type: Date,
		default: Date.now
	},
	idPhoto: {
		type: String,
		trim: true
	},
	claimed: {
		type: Boolean,
		default: false
	},
	claimedBy: {
		type: String,
		trim: true
	},
    sakaDocsCode: {
    	type: String,
    	default: Math.floor(Math.random()*900).toString() + generateSequence()
    },
    accountNumber: {
    	type: String,
    	default: "N" + Math.floor(Math.random()*900).toString() + generateSequence()
    }
	// store photo
});

mongoose.model('National', NationalSchema);