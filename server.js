const express = require('express');
const mysql = require('mysql');

const app = express();

app.listen("3000", err => {
   if(err){

   }
   console.log("Server was start...");
});