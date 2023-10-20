import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

const uri: string = 'mongodb+srv://tauk09ph:09Taumang@own-hive.ct3kqxl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch(error => {
  console.error('Error connecting to MongoDB', error);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
