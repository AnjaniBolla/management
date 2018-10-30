var express= require('express');
var router = express.Router();
var multer  = require('multer');  
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  
var upload = multer({ storage : storage}).single('myfile');  

router.post('/',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
        	console.log("Comes inside err......",err);
            res.end("Error uploading file.");  
        }else{
        	res.end("File is uploaded successfully!"); 
        }
    });  
});  
module.exports=router;