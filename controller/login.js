
const path = require("path");
const User = require("../models/db");


exports.login_get = (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/login.html"));
}
exports.login_post = async  (req,res)=>{
    const {username, password }=  req.body;
    try {
      const user = await User.findOne({username:username, password:password});
      if(user){
        res.redirect("/");
      }else{
        res.send("User not found")
      }
    } catch (error) {

      console.log(error);
      
    }
}