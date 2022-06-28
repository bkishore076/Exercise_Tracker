const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userschema = new Schema({
    
    username :{
    
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
},
{
timestamps: true,
});
const user = mongoose.model('user',userschema);
module.exports = user;