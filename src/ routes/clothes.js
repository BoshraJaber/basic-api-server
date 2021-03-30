'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const Clothes = require('../models/clothes');
const clothes = new Clothes();
const router = express.Router();


// Add a Record
// You should verify that only the fields you define get saved as a record
router.post('/', addClothes);
// Get All Records
router.get('/', getAllClothes);
// Get One Record
router.get('/:id', validator, getClothesById);
// Update A Record
router.put('/:id', validator, updateClothes);
//  You should verify that only the fields you define get saved as a record
// Delete A Record
router.delete('/:id', validator, deleteClothes);
// Returns: The record from the database as it exists after you delete it (i.e. null

function addClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.create(clothesObject);
  res.status(201).json(resObj);
}
function getAllClothes(req, res) {
  const resObj = clothes.read();
  res.json(resObj);
}
function getClothesById(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}
function updateClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.update(req.params.id, clothesObject);
  res.json(resObj);
}
function deleteClothes(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;