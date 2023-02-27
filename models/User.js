import mongoose from "mongoose" ;

const UserSchema = new mongoose.Schema(
    {
        FirstName: {
                type: String,
                required: true,
                min: 2,
                max: 50,
        },
        LastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        Email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        PicturePath: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        Password: {
            type: String,
            min:5,
            required: true,
        },
        PicturePath: {
            type: String,
            default: "",
        },
        Friends: {
            type: Array,
            default: [],
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    {timestamps: true}
);

const user= mongoose.model("User",UserSchema);
export default User;
