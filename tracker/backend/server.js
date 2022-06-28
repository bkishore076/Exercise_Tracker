const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
require ('dotenv').config();
const app = express();
const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
const exercisesrouter = require('./routes/exercises');
const usersrouter= require('./routes/users');
app.use('/exercises',exercisesrouter);
app.use('/users',usersrouter);
app.listen(port,()=>{
    console.log(`server running succesfully:${port}`)
    
    mongoose.connect(uri, err => {
        if(err) throw err;
        console.log('Connected to MongoDB!!!')
     })
});
 