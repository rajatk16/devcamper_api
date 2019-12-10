const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

// @desc Get all Bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
      success: true,
      msg: bootcamps
    });
  } catch (err) {
    next(err)
  }
}

// @desc Get Bootcamp with id
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }

}

// @desc Create New Bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.postBootcamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err)
  }
}

// @desc Update Bootcamp with id
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error)
  }
}

// @desc Delete Bootcamp with id
// @route DELETE /api/v1/bootcamps/:id
// @access PRIVATE
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    res
      .status(200)
      .json({
        success: true,
      });
  } catch (error) {
    next(error)
  }
}