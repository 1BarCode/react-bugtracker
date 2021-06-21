const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require("../controllers/auth.js");

// equivalent to:  router.route("/register").post(register)
router.post("/register", register); // post request

router.post("/login", login); // post request

router.post("/forgotpassword", forgotpassword);

router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router;
