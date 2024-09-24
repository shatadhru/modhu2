const path = require('path');

exports.main_chat = (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/main_chat_home.html'));
}