const path = require("path");
const User = require("../models/db");
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.signup_get = (req,res)=>{
  res.sendFile(path.join(__dirname, '../public/signup.html'));
}
exports.signup_post = async (req,res)=>{
  const {username, password,re_password} =req.body;
   if(password !== re_password){
     return res.status(400).send("Passwords do not match");
   }else{
    try {

         
        const hash = await bcrypt.hash(password,saltRounds);
      const user = new User({
        username:username,
        password:hash
      })
        await user.save();

      if(user){
          
          

          res.status(201).redirect("/login")``
      }
      
    } catch (error) {
      res.status(500).send("Server Error "+ error);

      console.log(error);
      
    }
   }


}
