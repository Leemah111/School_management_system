const mongoose = require ('mongoose')
const { Schema, model } = mongoose;

const librarySchema = Schema({
title:{
    type: String,
    required: true,
},
book_code:{
    type: String,
    required: true,
    
},
author:{
    type: String,
    required: true,
},
description:{
    type:String,
    required:true,
},
status:{
    type: Boolean,
    required: true,
    default: false,
}

});

const Library= mongoose.model('library', librarySchema);
module.exports = Library;

