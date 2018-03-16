const http = require("http");
const fs = require("fs");
const urlLib = require("url");
const querystring = require("querystring");

var server  = http.createServer(function(req, res){
    //GET
    let obj = urlLib.parse(req.url,true);
    let url = obj.pathname;
    const GET = obj.query;

    //POST
    let str = "";
    req.on("data",function(data){
        str += data;
    })
    req.on("end",function(){
        const POST = querystring.parse(str);
    })
    //url
    //get
    //post
    

    //文件请求
    let fileName = "./www/"+url;
    fs.readFile(fileName,function(err, data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
}).listen(8099)