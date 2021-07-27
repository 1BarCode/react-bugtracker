import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {
  // check if user's token is valid

  try {
    const token = req.headers.authorization.split(" ")[1];

    // find out whether the token is Google Auth or custom

    const CustomAuth = token.length < 500;

    let decodedData;

    if (token && CustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {}
};

export default auth;
