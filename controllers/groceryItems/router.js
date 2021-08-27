const express = require('express')
const groceryItemsController = require('./controller')
const router = express.Router()

router.get('/',groceryItemsController.getAll)
router.get('/new',groceryItemsController.new)
router.get('/:id',groceryItemsController.getOne)
router.get('/:id/edit',groceryItemsController.edit)
router.delete('/:id',groceryItemsController.destroy)
router.put('/:id',groceryItemsController.update)
router.post('/',groceryItemsController.create)

module.exports = router
