const { ShoppingList } = require("../../models");

module.exports = {
  getAll: (req, res) => {
    ShoppingList.find({}, (error, allShoppingLists) => {
      if (error) {
        res.send(error);
      } else {
        console.log(allShoppingLists.length, "<< shopping lists found");
        res.render("shoppingList/index.ejs", { shoppingList: allShoppingLists });
      }
    });
  },
  getOne: (req, res) => {
    ShoppingList.findById(req.params.id, (error, foundShoppingList) => {
      if (error) {
        res.send(error);
      } else {
        console.log(foundShoppingList.storeName, "<< stores found");
        res.render("shoppingList/show.ejs", { shoppingList: foundShoppingList });
      }
    });
  },
  new: (req, res) => {
    res.render("shoppingList/new.ejs");
  },
  create: (req, res) => {
    const shoppingListInfo = req.body;
    ShoppingList.create(shoppingListInfo, (error, newShoppingList) => {
      if (error) {
        return res.send(error);
      } else {
        console.log(newShoppingList);
        res.redirect("/shoppingList");
      }
    });
  },
  destroy: (req, res) => {
    ShoppingList.findByIdAndDelete(req.params.id, (error, deletedShoppingList) => {
      if (error) {
        res.send(error);
      } else {
        console.log(deletedShoppingList.name, "<< shopping list deleted");
        res.redirect("/shoppingList/");
      }
    });
  },
  edit: (req, res) => {
    ShoppingList.findById(req.params.id, (error, foundShoppingList) => {
      if (error) {
        res.send(error);
      } else {
        console.log(foundShoppingList.storeName, "<< shopping list found");
        res.render("shoppingList/edit.ejs", { shoppingList: foundShoppingList });
      }
    });
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
          res.redirect("/shoppingList/" + req.params.id);
        }
      }
    );
  },
};
