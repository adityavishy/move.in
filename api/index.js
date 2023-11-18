import express from 'express';
import mongoose from 'mongoose';


mongoose.connect("mongodb+srv://adi:adi@mernestate.iffjm3n.mongodb.net/mern-estate?retryWrites=true&w=majority").then(()=>{
    console.log('Connected to Mongo')
})

const app = express();
app.listen(3000,()=>{
    console.log('Running server');
});
