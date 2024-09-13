

const path = require("path");
const User = require("../models/db");

exports.signup_get = (req,res)=>{
  res.sendFile(path.join(__dirname, '../public/signup.html'));
}
exports.signup_post = async (req,res)=>{
  const {username, password,re_password} =req.body;
   if(password !== re_password){
     return res.status(400).send("Passwords do not match");
   }else{
    try {

      const user = new User({username:username,
         password:password})

      if(user){
          await user.save();
          

          res.status(201).redirect("/login")``
      }
      
    } catch (error) {
      res.status(500).send("Server Error "+ error);

      console.log(error);
      
    }
   }


}
