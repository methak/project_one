const express = require('express')
const app = express()
const methodOverride = require('method-override')
const db = require('./db')
const {groceryItemsController, shoppingListController} = require('./controllers/index')

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.json())
app.use('/grocery-items', groceryItemsController)
app.use('/shopping-list', shoppingListController)
app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.listen(3088, ()=>console.log('connected to express app on port 3088'))
