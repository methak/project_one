const express = require('express')
const app = express()
const methodOverride = require('method-override')
const db = require('./db')
const {groceryItemsController, shoppingListController} = require('./controllers/index')
const groceryItem = require('./models/groceryItems')
const shoppingList = require('./models/shoppingList')

app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.json())
app.use('/grocery-items', groceryItemsController)
app.use('/shopping-list', shoppingListController)

// testing code //
const categoryItems = ['Fruits', 'Vegetables', 'Meat', 'Seafood', 'Frozen Foods', 'Bread & Bakery', 'Beverages', 'Baking', 'Personal Care', 'Household Supplies', 'Baby Items', 'Grains']

// Create Home Page Route
app.get('/', (req,res)=>{
    groceryItem.find({}, (error, allGroceryItems) => {
        if (error) {
            res.send(error);
        } else {
            shoppingList.find({}, (error, shoppingList) => {
                if (error) {
                    res.send(error);
                } else {
                    res.render('home.ejs', { category: categoryItems, groceryItem: allGroceryItems, shoppingList: shoppingList })
                }
            })
        }

    })

})

app.listen(process.env.PORT || 3088, ()=>console.log('connected to express app on port 3088'))
