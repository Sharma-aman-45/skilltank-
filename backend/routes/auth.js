const express = require('express');
const { query, validationResult } = require('express-validator');
const Users = require('../models/Users');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'AMANSECRET$%';

// create a user using post "api/auth/createuser.o login required"
router.post('/createuser',[query('name','enter a valid name').notEmpty(),query('email').notEmpty(),query('password').isLength({min: 5})], async(req,res)=>{
//  if there are errors , return bad request and the errors
let success = false;
   const result = validationResult(req);
   if (result.isEmpty()) {
      return res.send(`invalid', ${req.query.name}!`);
   }
   try {
      
   
    let users =  await Users.findOne({email: req.body.email});
    if(users){
      return res.status(404).json({ success,error: "Sorry a user with this name already exits"})
    }
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(req.body.password, salt);
    users = await Users.create({
      name: req.body.name,
      password: secpass,
      email: req.body.email,

   // }).then(users=>res.json(users)).catch(err=> {console.log(err)
   //    res.json({error: 'please enter unique'})
  
})
const data = {
   users:{
      id: users.id
   }
}
 const authtoken = jwt.sign(data, JWT_SECRET);
 success = true;
res.json({success,authtoken})
   }
   catch(error){
        console.log(error.message);
        res.status(500).send("some error happend");
   }
})


// Authenticate  a user using post "api/auth/createuser.o login required"
router.post('/login',[query('email','enter a valid email').notEmpty(),query('password','cannot be blank').notEmpty()], async(req,res)=>{
    let success = false;
   const result = validationResult(req);
   if (result.isEmpty()) {
      return res.send(`invalid', ${req.query.name}!`);
   }
   const{email, password} = req.body;
   try{
      let users = await Users.findOne({email});
      if(!users){
         res.status(400).json({error:"please try to login with correct credentials"});
      }
      const passwordCompare = await bcrypt.compare(password, users.password);
      if(!passwordCompare){
         success = false;
         return res.status(400).json({ success, error:"please try to login with correct credentials"});
      }
      const data = {
         users:{
            id: users.id
         }
      }
       const authtoken = jwt.sign(data, JWT_SECRET);
       success = true;
      res.json({success,authtoken}) 
   }
   catch(error){
      console.log(error.message);
      res.status(500).send("Internal error happend");
   }
});

//route3 get user details  .... post"api/auth/getuser" login required
router.post('/getuser', fetchuser, async(req,res)=>{
  
try{

  const  id = req.user.id;
  const user = await Users.findById(id).select("-password")
  res.send(user);
}
catch(error){
   console.log(error.message);
   res.status(500).send("Internal error happend");
}});
module.exports = router