const express=require("express");
const mongoose=require("mongoose");
const port=3030;
const app=express();
const path=require("path");
const listen=require("./models/listen.js");
app.use(express.urlencoded({extended:true}));
main().then((data)=>{
    console.log("connection completed");
})
.catch((err)=>{
     console.log(err);
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
};
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.listen(port,()=>{
    console.log("server is working");
});
app.get("/listening",async (req,res)=>{
    const allList=await  listen.find({});
    res.render("listing/index.ejs",{allList});
   

})
app.get("/listening/:id",async(req,res)=>{
    let {id}=req.params;
    const access=await listen.findById(id);
    res.render("listing/data.ejs",{access});

})
app.get("/listing/new",(req,res)=>{
      res.render("listing/new.ejs")
})
app.post("/listening",async(req,res)=>{
    const newlisten=new listen(req.body.listen)
    await newlisten.save();
    console.log(newlisten);
    res.redirect("/listening");
});
  /*app.get("/listing",async(req,res)=>{
    let samplelisting=new listing({
        title:"My New Villa",
        discription:"Mountain Hills",
        price:1200,
        location:"panji,Goa",
        country:"India"
    });
    await samplelisting.save();
     res.send("working");
  })*/
app.get("/",(req,res)=>{
    res.send("working");
})