const Bootcamp = require('../models/Bootcamp');

// @desc Get all Bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps'
  });
}

// @desc Get Bootcamp with id
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Display bootcamp ${req.params.id}`
    });
}

// @desc Create New Bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.postBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({
      success: false
    })
  }
}

// @desc Update Bootcamp with id
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: ` Update bootcamps ${req.params.id}`
    });
}

// @desc Delete Bootcamp with id
// @route DELETE /api/v1/bootcamps/:id
// @access PRIVATE
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Delete bootcamp ${req.params.id}`
    });
}