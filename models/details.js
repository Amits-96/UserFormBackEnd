const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const listSchema = new Schema ({
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        middleName:{
            type:String,
            required:false
        },
        address:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        }
},{timestamps:true})

 module.exports =mongoose.model('petDetails',listSchema)
