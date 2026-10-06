const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const listingSchema=new Schema({
          title:{
            type:String,
            required:true,
          },
          description:String,
          image:{ filename:{
              type:String,
              default:"listingimage"
          },url:{  
            type:String,
            default: "https://pixabay.com/images/search/mountains/",
            set:(v)=> v===" "? "https://pixabay.com/images/search/mountains/":v}
         
          },
          price:Number,
          location:String,
          country:String,

});
    const listen=mongoose.model("listen",listingSchema);
    module.exports=listen;