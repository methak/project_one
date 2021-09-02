const express = require('express')
const shoppingListController = require('./controller')
const router = express.Router()

router.get('/',shoppingListController.getAll)
router.get('/new',shoppingListController.new)
router.get('/:id',shoppingListController.getOne)
router.get('/:id/edit',shoppingListController.edit)
router.delete('/:id',shoppingListController.destroy)
router.put('/item-update/:id',shoppingListController.item_update)
router.put('/:id',shoppingListController.update)
router.post('/',shoppingListController.create)

module.exports = router
