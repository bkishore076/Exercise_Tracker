const router= require('express').Router()
const user = require('../models/user.model')

router.route('/').get((req,res)=>
 user.find()
 .then(users=> res.json(users))
 .catch(err=>res.status(400).json('error'+err))

)
router.route('/add').post((req,res)=>{
const username= req.body.username;
const newuser = new user({username})
newuser.save()
.then(()=>res.json('user added'))
.catch(err=>res.status(400).json('error'+err));
});
module.exports = router;