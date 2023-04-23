const mysql=require('mysql2');
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({
    path:path.resolve(__dirname,'./.env')
});

const con= mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
    
con.connect((err)=>{
    if(err) throw err;
    console.log("DateBaseConnected");
});

module.exports=con;

