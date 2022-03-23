const mongoose = require ('mongoose');

const { Schema, model } = mongoose;

const teachersSchema = Schema({
name:{
    type: String,
    required:true,
},
email:{
    type: String,
    required: true,
},
phone_number:{
    type: Number,
    required:true,
},

date_of_birth:{
    type: String,
    required: true,
},
country:{
    type: String,
    required: true,
},
city:{
    type: String,
    required: true,
    
},
address:{
    type: String,
    required: true,
},
date:{
    type:Date,
    //default: new Date.now(),
    required:true,
},
status:{
    type: Boolean,
    required: true,
    default: false,
}

});

const teachersModel = model("teachers", teachersSchema);
module.exports = teachersModel;


