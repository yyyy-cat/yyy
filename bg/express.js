var express = require("express")
var app = express()
// var jwt = require("jsonwebtoken");
var querystring = require("querystring")

var fs = require("fs")

app.use(function (req, res, next) {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

app.listen(3000, function () {
  

    console.log("3000");

})
// app.get("/getAllGanghao",function (req,res) {

//     fs.readFile("./user.json",function (err,data) {
//         var arr = JSON.parse(data)
//         console.log(arr);
//         res.send(arr)
        
//     })
// })
app.post("/api/businessArea", function (req, res) {
    var str = "";
    req.on("data", function (data) {
        str += data;
    })
    req.on("end", function () {
        // console.log(str);
        var obj = querystring.parse(str)
        console.log(obj);
        
        
        // fs.readFile("./user.json", function (err, data) {
        //     console.log(data);
            
        //    res.send(data)
        // })
    })
})
app.post("/getProcessExecutionInfo", function (req, res) {
    var str = "";
    req.on("data", function (data) {
        str += data;
    })
    req.on("end", function () {
        // console.log(str);
        var obj = querystring.parse(str)
        console.log(obj);
        
        
        // fs.readFile("./user.json", function (err, data) {
        //     console.log(data);
            
        //    res.send(data)
        // })
    })
})
app.post("/getProcessExecutionInfo", function (req, res) {
    var str = "";
    req.on("data", function (data) {
        str += data;
    })
    req.on("end", function () {
        // console.log(str);
        var obj = querystring.parse(str)
        console.log(obj);
        
        
        // fs.readFile("./user.json", function (err, data) {
        //     console.log(data);
            
        //    res.send(data)
        // })
    })
})

