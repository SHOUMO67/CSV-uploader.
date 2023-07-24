
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shoumodip:shoumo@cluster0.scxf24d.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://127.0.0.1:27017/employeereviewsystem');
// // These set of line can be written in async await fashion, but I have followed the documentation. 
// mongoose.connect(DB).then(()=>{
//      console.log('connection successful');
//  }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

// db.on('error', console.error.
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});


module.exports = db;