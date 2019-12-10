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
    res.status(400).json({
      success: false
    })
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
    next(
      new ErrorResponse(
        `Bootcamp with id ${req.params.id} not found`,
        404
      )
    );
  }

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
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!bootcamp) {
      return res.status(400).json({
        success: false
      })
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    })
  } catch (error) {
    res.status(400).json({
      success: false
    })
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
    res.status(400).json({
      success: false
    })
  }
}

// {
//   "careers": [
//       "Web Development",
//       "UI/UX",
//       "Business"
//   ],
//   "photo": "no-photo.jpg",
//   "housing": true,
//   "jobAssistance": true,
//   "jobGuarantee": false,
//   "acceptGi": true,
//   "_id": "5deddd9fe5d0c97fd8216b93",
//   "name": "Devworks Bootcamp",
//   "description": "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
//   "website": "https://devworks.com",
//   "phone": "(111) 111-1111",
//   "email": "enroll@devworks.com",
//   "address": "233 Bay State Rd Boston MA 02215",
//   "createdAt": "2019-12-09T05:37:35.243Z",
//   "__v": 0
// }