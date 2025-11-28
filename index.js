const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect("")
.then(()=>console.log("mongoDb connected successfully"))
.catch((err)=>console.log(err));
const ContactsSchema=new mongoose.Schema({
    name:String,
    phoneno:,
    email:String,
});
const Contact=mongoose.model("Contact",ContactsSchema);
app.get("/Contacts",async(req,res)=>{
     const contacts=await Contact.find();
     res.json(contacts);
});
app.post("/Contacts/new",async(req,res)=>{
    const contact=new Contact({
      name:req.body.name,
    phoneno:req.body.phoneno,
    email:req.body.email,
    })
    contact.save();
    res.json(contact);
});
app.delete("/Contacts/delete/:id",async(req,res)=>{
    const contact= await Contact.findByIdAndDelete(req.params.id);
    res.json(contact);
})
app.put("/Contacts/update/:id",async(req,res)=>{
    const contact= await Contact.findById(req.params.id);
    contact.phoneno=req.body.phoneno;
    contact.save();
    res.json(contact);
})
app.listen(3001,()=>console.log("app is listening"));
