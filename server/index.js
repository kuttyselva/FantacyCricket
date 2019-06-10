const express=require('express');
const cors=require('cors');
const app=express();
const mysql=require('mysql');
const conbat="SELECT * FROM players WHERE pos='bat'"
const conbow="SELECT * FROM players WHERE pos='bow'"
const conall="SELECT * FROM players WHERE pos='all'"
const conwc="SELECT * FROM players WHERE pos='wc'"
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fantacy',
    
});
connection.connect(err=>{
    if(err){
        return err;
    }
})
app.use(cors());
app.get('/',(req,res)=>{
    connection.query(conbat,(err,result)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })
})
app.get('/bow',(req,res)=>{
    connection.query(conbow,(err,result)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })
})
app.get('/wc',(req,res)=>{
    connection.query(conwc,(err,result)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })
})
app.get('/all',(req,res)=>{
    connection.query(conall,(err,result)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
                data:result
            })
        }
    })
})


app.get('/aa',(req,res)=>{
    const {first,email,pno} =req.query;
    const Ins=`INSERT INTO users (first,email,pno) VALUES('${first}','${email}','${pno}')`;
    connection.query(Ins,(err,result)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send("added");
        }
    })
})

app.listen(3001,()=>{
    console.log('app listens oin ')
})