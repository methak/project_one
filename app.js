// config
const express = require ('express')
const app = express()
const port = 3000

// require mongoose
const mongoose = require('mongoose');

// import method-override
const methodOverride = require('method-override');

// ----- middleware -----
app.use(express.urlencoded({extended:true}));

// ----- method-overide -----
app.use(methodOverride('_method'));

// ----- server initialization -----
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// ----- listener -------
app.listen(port, () => {
  console.log("Let's go shopping!")
})
