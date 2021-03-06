const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseschema = new Schema({
    
    username :{type:String,required:true},
    description :{type:String,required:true},
    duration :{type:Number,required:true},
    date:{type:Date,required: true}
},
{
timestamps: true,
});
const exercise = mongoose.model('exercise',exerciseschema);
module.exports = exercise;