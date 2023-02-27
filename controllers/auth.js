import bcrypt from "bcrypt";
import jwt from "Jsonwebtoken" ;
import User from ". ./models/User . js";

export const register = async(req, res) => {
    try{
        const {
            FirstName,
            LastName,
            Email,
            Password,
            PicturePath,
            Friends,
            location,
            occupation,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash= await bcrypt.hash(Password, salt)

        const newUser= new User ({
            FirstName,
            LastName,
            Email,
            Password: passwordHash,
            PicturePath,
            Friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random()*10000 ),
            impressions: Math.floor(Math.random()*10000 ),

        });
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);     
    } catch(err){
        res.status(500).json({error: err.message })

    }
}