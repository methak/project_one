const { GroceryItem, ShoppingList } = require("../../models");

module.exports = {
  getAll: (req, res) => {
    GroceryItem.find({}, (error, allGroceryItems) => {
      if (error) {
        res.send(error);
      } else {
        console.log(allGroceryItems.length, "<< Grocery Items found");
        res.render("grocery-items/index.ejs", { groceryItem: allGroceryItems });
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
    GroceryItem.find({}, (err, allGroceryItems)=>{
      if(err){
          res.send(err)
      }else {
          res.render('grocery-items/new.ejs', {shoppingLists: allGroceryItems})
      }
  })

  },
  create: (req, res) => {
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
    GroceryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      (error, updatedGroceryItem) => {
        if (error) {
          res.send(error);
        } else {
          console.log(updatedGroceryItem.name, "<< Grocery Item updated");
          res.redirect("/grocery-items/" + req.params.id);
        }
      }
    );
  },
};
