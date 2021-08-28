const { GroceryItem, ShoppingList } = require("../../models");

module.exports = {
  getAll: (req, res) => {
    GroceryItem.find({}, (error, allGroceryItems) => {
      if (error) {
        res.send(error);
      } else {
        console.log(allGroceryItems.length, "<< Grocery Items found");
        res.render("groceryItems/index.ejs", { groceryItem: allGroceryItems });
      }
    });
  },
  getOne: (req, res) => {
    GroceryItem.findById(req.params.id, (error, foundGroceryItem) => {
      if (error) {
        res.send(error);
      } else {
        console.log(foundGroceryItem.name, "<< Grocery Items found");
        res.render("groceryItems/show.ejs", { groceryItem: foundGroceryItem });
      }
    });
  },
  new: (req, res) => {
    ShoppingList.find({}, (err, allShoppingLists)=>{
      if(err){
          res.send(err)
      }else {
          res.render('groceryItems/new.ejs', {shoppingLists: allShoppingLists})
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
        res.redirect("/groceryItems");
      }
    });
  },
  destroy: (req, res) => {
    GroceryItem.findByIdAndDelete(req.params.id, (error, deletedGroceryItem) => {
      if (error) {
        res.send(error);
      } else {
        console.log(deletedGroceryItem.name, "<< Grocery Item deleted");
        res.redirect("/groceryItems/");
      }
    });
  },
  edit: (req, res) => {
    GroceryItem.findById(req.params.id, (error, foundGroceryItem) => {
      if (error) {
        res.send(error);
      } else {
        console.log(foundGroceryItem.name, "<< Grocery Item found");
        res.render("groceryItems/edit.ejs", { groceryItem: foundGroceryItem });
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
          res.redirect("/groceryItems/" + req.params.id);
        }
      }
    );
  },
};
