const express=require("express");
const router=express.Router();


router.get("/:code",(req,res)=>{
    const con=require('./DBConnect')
    const sql=`SELECT * from country where code='${req.params.code}';`;
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});

module.exports=router;