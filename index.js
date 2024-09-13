const express=require('express');

const app=express();
app.use(express.json())

let toDos=[];

app.get('/',function(req,res){
    res.json(toDos);
})

app.post('/todo',function(req,res){

        const todo=req.body;

        
        toDos.push(todo)
        res.json(toDos);

})

app.delete('/todo',function(req,res){
    const item=req.body;
    
    toDos=toDos.filter(toDo=>toDo.id!==item.id);
    res.send(toDos);
})

app.put('/todo',function(req,res){
    const item=req.body;
    
    for(let i=0;i<toDos.length;i++){
        if(toDos[i].id==item.id){  
            toDos[i].content=item.content;
        }
    }
    res.json(toDos);
})


app.listen(3000)