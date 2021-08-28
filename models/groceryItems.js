const mongoose = require('mongoose')


const groceryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  isPurchased: {
    type: Boolean
  },
  isOrganic: {
    type: Boolean
  },

    shoppingList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ShoppingList'
  }},
    {timestamps: true})


const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema)

module.exports = GroceryItem
