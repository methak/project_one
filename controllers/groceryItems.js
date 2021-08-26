const express = require('express')
const router = express.Router()

// require groceryItem schema
const groceryItems = require ('..models/groceryItems')


// ----- edit route -----
get('/groceryItems/:id/edit', (req, res) => {
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
