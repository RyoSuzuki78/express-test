const express =require("express");
const router=express.Router();

router.get("/:code/:name",(req,res)=>{
    const con =require("./DBConnect");
    const sql=`INSERT INTO country(code,name) value('${req.params.code}','${req.params.name}');`
    con.query(sql,(err,result)=>{
        if(err) {
            res.status(400).send('エラーです');
        };
    });
});

module.exports=router;