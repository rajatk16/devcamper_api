const express = require('express');
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  postBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius
} = require('../controllers/bootcamps');

router
  .route('/')
  .get(getBootcamps)
  .post(postBootcamp)

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)

router
  .route('/radius/:zipcode/:distance')
  .get(getBootcampsInRadius)

module.exports = router;