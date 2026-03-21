const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "./data.json";

const read = () => JSON.parse(fs.readFileSync(FILE));
const write = (d) => fs.writeFileSync(FILE, JSON.stringify(d, null, 2));

app.get("/api/media", (req,res)=>res.json(read()));

app.get("/api/media/:id", (req,res)=>{
  const item = read().find(i=>i.id == req.params.id);
  res.json(item);
});

app.post("/api/media", (req,res)=>{
  const data = read();
  const item = { id: Date.now(), ...req.body };
  data.push(item);
  write(data);
  res.json(item);
});

app.listen(5000, ()=>console.log("Server running on 5000"));
