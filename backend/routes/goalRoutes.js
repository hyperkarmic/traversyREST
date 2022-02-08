const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)

// router.get('/', getGoals)
//above line replaces these two get post reqs
// router.post('/', setGoal)

router.route('/:id').delete(deleteGoal).put(updateGoal)

// above line replaces the two below....

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router
