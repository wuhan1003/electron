const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const buffer = require('buffer')
const util = require('util');
const path = require('path');
const app = express();
const upload = multer({dest:'./upload'});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.post('/upload',upload.any(),(req,res)=>{
    // console.log('body',req.body);   
    // console.log('files',req.files);
    const files = req.files;
    files.length > 0 && files.forEach((item,index)=>{
        const filePath = path.join(__dirname,item.path);
        fs.readFile(filePath,'base64',(err,buf)=>{
            if(err){
                res.status(500).send(`读取${filePath}文件出错`)
                res.end();
            } else {
                
                fs.writeFile(`${filePath}/${item.originalname}`,buf,(err)=>{
                    if(err){
                        return new Error(`创建文件${item.originalname}失败`)
                    } else {
                        res.status(200).send(`上传${filePath}文件成功`)
                        res.end();
                    }
                })
            }
        })
    })



    
})
app.listen(3000)