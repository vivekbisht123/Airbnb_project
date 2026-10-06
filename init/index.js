const mongoose=require("mongoose");
const initData=require("./data.js");
const listen=require("../models/listen.js");
main().then((data)=>{
    console.log("connection completed");
})
.catch((err)=>{
     console.log(err);
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
};
const initDB=async()=>{
    await listen.deleteMany({});
    await listen.insertMany(initData.data); 
    console.log("data was initialized");
}
initDB();