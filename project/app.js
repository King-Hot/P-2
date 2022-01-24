
const express = require('express');
const mysql = require('mysql');
//const db = require("../db.js");
const path = require("path");

const app = express();

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
});

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/index.html")
    //console.log("main");
});

app.use(express.static('public'));//public 디렉토리에 포함된 파일을 로드
