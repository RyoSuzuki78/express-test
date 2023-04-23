const express=require('express');
const app=express();
const port=5000;





//静的ファイルの読み込み
//app.use(express.static('public'));
//
//app.use(require('./DBConnect'));

app.use("/read",require('./read'));
app.use("/create",require('./create'));

app.get("/",(req,res)=>{
    res.send('<h1>Hello World1</h1>');
});

app.listen(port,()=>{
    console.log("サーバが起動しました");
});