const mongoose = require('mongoose')

const shoppingListSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true
  },
  storeAddress: {
    type: String
  },
  storeHours: {
    type: String
  },
  totalPrice: {
    type: Number
  }

},  {timestamps: true})


const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema)

module.exports = ShoppingList
