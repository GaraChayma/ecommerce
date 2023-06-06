const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");


exports.isAuthenticatedUser = catchAsyncErrors(async (req,res,next) =>{
    const {token}=req.cookies;

    if (!token) {
      return next(new ErrorHandler("Please Login for access this resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decodedData.id);

    next();
});

// Admin Roles
exports.authorizeRoles = (...roles) =>{
  return (req,res,next) =>{
      if(!roles.includes(req.user.role)){
        return next(new ErrorHandler(`${req.user.role} can not access this resources`));
      };
      next();
  }
}


// Change user Role --Admin
exports.updateUserRole = catchAsyncErrors(async(req,res,next) =>{
  const newUserData = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
  };
  const user = await User.findByIdAndUpdate(req.params.id,newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
  });

  res.status(200).json({
      success: true,
      user
  })
});