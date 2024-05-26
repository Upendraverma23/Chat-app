import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generatetoken.js';


export const signup = async(req, res) => {

try{
const { fullName,username,password,confirmPassword,gender } = req.body; 


if (password !== confirmPassword){
    return res.status(400).json({error :"Passwords don't match"})
}


const user = await User.findOne({username});

if (!fullName) {
    return res.status(400).json({ error: "Full name is required" });
}


if (user) {
  return res.status(400).json({error : "username already exists"});
}

//hashed passwords
const salt =await bcrypt.genSalt(10);
const hashedpassword = await bcrypt.hash(password, salt);




const boyprofilepic =`https://avatar.iran.liara.run/public/boy?username=${username}`;
const girlprofilepic =`https://avatar.iran.liara.run/public/girl?username=${username}`;

const newUser = new User({
    fullName,
    username,
    password : hashedpassword,
    gender,
    profilePic : gender === 'male'? boyprofilepic : girlprofilepic,
});

if(newUser){
    generateTokenAndSetCookie(newUser._id,res)
    await newUser.save();

res.status(201).json({
       _id: newUser._id,
      fullName : newUser.fullName,
        username : newUser.username,
        profilePic : newUser.profilePic,
});
}
else{
    res.status(400).json({error: "Invalid user data"})
}


}
catch(error)
{

    if (error.name === "CastError") {
        return res.status(500).json({
            success: false,
            message: "Invalid id",
        });
    }
console.log("Error in signup controller",error.message);
res.status(500).json({error : "Internal Server error"});
}
};



export const login = async(req, res) => {
   try{
     
    const {username,password} =req.body;

    const user = await User.findOne({username});
    const ispasswordcorrect = await bcrypt.compare(password,user?.password || "");
    if(!user || !ispasswordcorrect){
        return res.status(400).json({error : "Invalid username or passwords"});
    }
    generateTokenAndSetCookie(user._id,res);
    res.status(200).json({
        _id: user._id,
        fullName : user.fullName,
        username : user.username,
        profilePic : user.profilePic,
    });


   }
   catch(error){

    console.log("Error in login controller",error.message);
    res.status(500).json({error : "Internal Server error"});
   }
};



export const logout = async(req, res) => {

 try{
    res.cookie("jwt","",{maxAge : 0})
    res.status(200).json({message:"logged out succesfully"})
 }

    catch(error){
    
        console.log("Error in login controller",error.message);
        res.status(500).json({error : "Internal Server error"});
       }
};


