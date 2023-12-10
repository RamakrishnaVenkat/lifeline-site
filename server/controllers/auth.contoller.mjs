//MODELS
import User from "../models/User.model.mjs";

//PACKAGES
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.mjs";


//1. SIGN UP CONTROLLER
const generateUniqueMedicalID = async () => {
  let isUnique = false;
  let medicalID;

  while (!isUnique) {
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number
    medicalID = `MED${randomDigits}`;

    const existingUser = await User.findOne({ medical_id: medicalID }); // Check if medical ID exists
    if (!existingUser) {
      isUnique = true;
    }
  }

  return medicalID;
};

export const signup = async (req, res, next) => {
  try {
    const { name, username, dob, password, address, contact, age, gender, blood_group } = req.body;
    const hashedPass = bcryptjs.hashSync(password, 10); // Password, salt no.

    // Generate unique medical ID
    const medicalID = await generateUniqueMedicalID();

    const newUser = new User({ name, username, dob, password: hashedPass, address, contact, age, gender, blood_group, medical_id: medicalID });
    await newUser.save();
    res.status(201).json("User created successfully");
    // res.json(newUser);
  } catch (err) {
    next(err); // This uses the error middleware defined in the index.mjs file
  }
};

  

//2. SIGN IN CONTROLLER
export const signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const validUser = await User.findOne({ username });
    if (!validUser) return next(errorHandler(404, "Invalid userid/password")); //if the user is not valid return the error and stop execution
    console.log(validUser);
    //if the user valid decrypt and check the password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid userid/password"));

    //if the user entered correct credentials, then authorize them by giving a token
    const token = jwt.sign(
      {
        id: validUser._id, //it is always better to have the mongo id in the token, than any other info
      },
      process.env.JWT_SECRET
    ); //sign the token using a secret key of your own

    //destructure the password for safety purpose, and send only the rest of the data
    const { password: pass, ...rest_data } = validUser._doc; //SO THAT YOU DON'T NEED A SEPARATE API TO GET THE USER

    //once the token is created, save it in a cookie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest_data); //NOTE: YOU CAN ADD 'EXPIRES' IF YOU WANT THE TOKEN TO EXPIRE AFTER SOME TIME
  } catch (err) {
    next(err); //defined in index.mjs file
  }
};

//4. SIGN OUT USER FUNCTION
export const signout = (req, res, next)=>{
  try{
    res.clearCookie('access_token');
    res.status(200).json({message: "signed out successfully"})
  }
  catch(err){
    next(err);
  }
}
