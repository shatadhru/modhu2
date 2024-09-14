
const path = require("path");
const User = require("../models/db");
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.login_get = (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/login.html"));
}
exports.login_post = async  (req,res)=>{
    const {username, password }=  req.body;
    try {
      const user = await User.findOne({username:username});
      if(!user){
        return res.status(200).send("User does not exist");
      }
      const match = await bcrypt.compare(password, user.password)

      if(!match){
        return res.status(400).send("Invalid Password");
      }else{
        return res.status(201).send("Hurray Password MAtcheed");
      }

    } catch (error) {

      console.log(error);
      
    }
}