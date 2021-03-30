'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const Food = require('../models/food');
const food = new Food();
const router = express.Router();

// Add a Record
// You should verify that only the fields you define get saved as a record
router.post('/', addFood);
// Get All Records
router.get('/', getAllFood);
// Get One Record
router.get('/:id', validator, getFoodById);
// Update A Record
router.put('/:id', validator, updateFood);
//  You should verify that only the fields you define get saved as a record
// Delete A Record
router.delete('/:id', validator, deleteFood);
// Returns: The record from the database as it exists after you delete it (i.e. null

function addFood(req, res) {
  const foodObject = req.body;
  const resObj = food.create(foodObject);
  res.status(201).json(resObj);
}
function getAllFood(req, res) {
  const resObj = food.read();
  res.json(resObj);
}
function getFoodById(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}
function updateFood(req, res) {
  const foodObject = req.body;
  const resObj = food.update(req.params.id, foodObject);
  res.json(resObj);
}
function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;