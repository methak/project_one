const { GroceryItem, ShoppingList } = require("../../models");
const categoryItems = ['Fruits', 'Vegetables', 'Meat', 'Fish', 'Frozen Foods', 'Bread & Bakery', 'Beverages', 'Baking', 'Personal Care', 'Household Supplies', 'Baby Items', 'Pasta/Rice']

module.exports = {
  getAll: (req, res) => {
    GroceryItem.find({}, (error, allGroceryItems) => {
      if (error) {
        res.send(error);
      } else {
        console.log(allGroceryItems.length, "<< Grocery Items found");
        res.render("grocery-items/index.ejs", { groceryItem: allGroceryItems, category: categoryItems});
      }
    });
  },
  getOne: (req, res) => {
    GroceryItem.findById(req.params.id, (error, foundGroceryItem) => {
      if (error) {
        res.send(error);
      } else {
        console.log(foundGroceryItem.name, "<< Grocery Items found");
        res.render("grocery-items/show.ejs", { groceryItem: foundGroceryItem });
      }
    });
  },
  new: (req, res) => {
    ShoppingList.find({}, (err, allShoppingList)=>{
      let categoryName = req.params.name
      if(err){
          res.send(err)
      }else {
          res.render('grocery-items/new.ejs', {shoppingLists: allShoppingList, categoryName: categoryName})
      }
  })


  },
  create: (req, res) => {
    if (req.body.isOrganic === 'on') {
      req.body.isOrganic = true
    } else {
      req.body.isOrganic = false
    }if (req.body.isPurchased === 'on') {
      req.body.isPurchased = true
    } else {
      req.body.isPurchased = false
    }
    const groceryItemInfo = req.body;
    GroceryItem.create(groceryItemInfo, (error, newGroceryItem) => {
      if (error) {
        return res.send(error);
      } else {
        console.log(newGroceryItem);
        res.redirect("/grocery-items");
      }
    });
  },
  destroy: (req, res) => {
    GroceryItem.findByIdAndDelete(req.params.id, (error, deletedGroceryItem) => {
      if (error) {
        res.send(error);
      } else {
        console.log(deletedGroceryItem.name, "<< Grocery Item deleted");
        res.redirect("/grocery-items/");
      }
    });
  },
  edit: (req, res) => {
    GroceryItem.findById(req.params.id, (error, foundGroceryItem) => {
      if (error) {
        res.send(error);
      } else {
        console.log(foundGroceryItem.name, "<< Grocery Item found");
        res.render("grocery-items/edit.ejs", { groceryItem: foundGroceryItem });
      }
    });
  },
  update: (req, res) => {
    if (req.body.isOrganic === 'on') {
      req.body.isOrganic = true
    } else {
      req.body.isOrganic = false
    }

    if (req.body.isPurchased === 'on') {
      req.body.isPurchased = true
    } else {
      req.body.isPurchased = false
    }
    GroceryItem.findByIdAndUpdate(req.params.id,req.body, (error, updatedGroceryItem) => {

        if (error) {
          res.send(error);
        } else {
          console.log(updatedGroceryItem.name, "<< Grocery Item updated");
          res.redirect("/grocery-items");
        }
      }
    );
  },
};
