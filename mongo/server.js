const express =require('express');
const cors =require('cors');
const mongoose =require('mongoose')

const app =express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB connected...');
  }).catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });

  const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });

  const User = mongoose.model('User', UserSchema);