/**
 * Created by ������ on 2017/3/20.
 */
var express=require("express");
var app=express();
app.get("/",function(req,res){

    res.send("AA");
});
app.get("/haha",function(req,res){

    res.send("���ǹ�������");
});
app.listen(80);