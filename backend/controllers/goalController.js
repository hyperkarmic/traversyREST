const asyncHandler = require('express-async-handler')

// 'desc   Get Goals
// @route Get api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

//@desc Set Goal
//@route Get/api/goals
//@ access = Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('text field - where???')
  }
  res.status(200).json({ message: 'Set goal' })
})

//@desc update Goal
//@route PUT /api/goals
//@ access = Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` })
})
//@desc delete Goal
//@route DELETE /api/goals
//@ access = Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
