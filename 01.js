/**
 * Created by 张燕龙 on 2017/3/20.
 */
var express=require("express");
var app=express();
app.get("/",function(req,res){

    res.send("AA");
});
app.get("/haha",function(req,res){

    res.send("这是哈哈界面");
});
app.listen(80);