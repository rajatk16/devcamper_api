const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');

// @desc Get all Bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
    success: true,
    msg: bootcamps
  });
})

// @desc Get Bootcamp with id
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp with id ${req.params.id} not found`,
        404
      )
    )
  }
  res
    .status(200)
    .json({
      success: true,
      data: bootcamp
    });
})

// @desc Create New Bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.postBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp with id ${req.params.id} not found`,
        404
      )
    )
  }
  res.status(201).json({
    success: true,
    data: bootcamp
  });
})

// @desc Update Bootcamp with id
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp with id ${req.params.id} not found`,
        404
      )
    )
  }
  res.status(200).json({
    success: true,
    data: bootcamp
  })
})

// @desc Delete Bootcamp with id
// @route DELETE /api/v1/bootcamps/:id
// @access PRIVATE
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp with id ${req.params.id} not found`,
        404
      )
    )
  }
  res
    .status(200)
    .json({
      success: true,
    });
})