
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
<<<<<<< HEAD
      const user = await User.findOne({username:username});
      if(!user){
        return res.status(200).send("User does not exist");
=======
      const user = await User.findOne({username:username, password:password});
      if(user){
        res.send("")
      }else{
        res.send("Successfully Logined Modhu")
>>>>>>> 526a6aa32e4376c4d7defe3ace804559956e04b7
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
