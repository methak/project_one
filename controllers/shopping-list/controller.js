const { ShoppingList, GroceryItem } = require("../../models");

module.exports = {
  getAll: (req, res) => {
    ShoppingList.find({}, (error, allShoppingLists) => {
      if (error) {
        res.send(error);
      } else {
        console.log(allShoppingLists.length, "<< shopping lists found");
        res.render("shopping-list/index.ejs", { shoppingList: allShoppingLists });
      }
    });
  },
  getOne: (req, res) => {
    ShoppingList.findById(req.params.id, (error, foundShoppingList) => {
      if (error) {
        res.send(error);
      } else {
        GroceryItem.find({shoppingList :req.params.id}, (error, allGroceryItems) => {
          if (error) {
            res.send(error)
          } else {
            console.log(allGroceryItems)
            
            console.log(foundShoppingList.storeName, "<< stores found");
            res.render("shopping-list/show.ejs", { shoppingList: foundShoppingList , groceryItems: allGroceryItems});
          }
        })
      }
    });
  },
  new: (req, res) => {
    res.render("shopping-list/new.ejs");
  },
  create: (req, res) => {
    const shoppingListInfo = req.body;
    ShoppingList.create(shoppingListInfo, (error, newShoppingList) => {
      if (error) {
        return res.send(error);
      } else {
        console.log(newShoppingList);
        res.redirect("/");
      }
    });
  },
  destroy: (req, res) => {
    ShoppingList.findByIdAndDelete(req.params.id, (error, deletedShoppingList) => {
      if (error) {
        res.send(error);
      } else {
        console.log(deletedShoppingList.name, "<< shopping list deleted");
        res.redirect("/shopping-list/");
      }
    });
  },
  edit: (req, res) => {
    ShoppingList.findById(req.params.id, (error, foundShoppingList) => {
      if (error) {
        res.send(error);
      } else {
        console.log(foundShoppingList.storeName, "<< shopping list found");
        res.render("shopping-list/edit.ejs", { shoppingList: foundShoppingList });
      }
    });
  },
  item_update: (req, res) => {

    GroceryItem.findByIdAndUpdate(req.params.id,{isPurchased : !isPurchased}, (error, updatedGroceryItem) => {

        if (error) {
          res.send(error);
        } else {
          console.log(updatedGroceryItem.name, "<< Grocery Item isPurchased updated");
          res.send(updatedGroceryItem);
        }
      }
    );
  },

  update: (req, res) => {
    ShoppingList.findByIdAndUpdate(
      req.params.id,
      req.body,
      (error, updatedShoppingList) => {
        if (error) {
          res.send(error);
        } else {
          console.log(updatedShoppingList.storeName, "<< shopping list updated");
          res.redirect("/shopping-list/" + req.params.id);
        }
      }
    );
  },
};
