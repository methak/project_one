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

// ----- edit route -----
app.get('/groceryItems/:id/edit', (req, res) => {
  res.send('edit route')
})

// ----- new route -----
app.get('/groceryItems/new', (req, res) => {
  // res.send('new')
  res.render('new.ejs')
})

// ----- show route -----
app.get('/groceryItems/:id', (req, res) => {
  res.send('show page')
})

// ----- index route -----
app.get('/groceryItems', (req, res) => {
  res.render('index.ejs')
})

// ----- create route -----
app.post('/groceryItems', (req, res) => {
  res.send(req.body)
})

// ----- delete route -----
app.delete('/groceryItems/:id', (req, res) => {
  res.send('deleting...')
})

// ----- put/update route -----
app.put('/groceryItems/:id', (req, res) => {
  res.send(req.body)
})


// ----- listener -------
app.listen(port, () => {
  console.log("Let's go shopping!")
})
