import express from "express";
import employees from "./db/employees.js"

const app = express();
const list = employees

// console.log(list)
app.get("/", (req,res)=>{
    res.send("Hello employees!")
})

app.get("/employees", (req,res)=>{
    res.send(employees)
})

app.get("/employees/random", (req,res)=>{
    if(req.params === "random"){
    let id = Math.floor( Math.random() * list.length )
    console.log(list.length)
    res.send(employees[id])
    }
})

app.get("/employees/:id", (req,res)=>{
    // console.log(req.params.id)
    if(!employees[Number(req.params.id)]){
        return res.status(404).send("not found")
    }
    res.send(employees[Number(req.params.id)])
})



export default app;