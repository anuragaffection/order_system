import bcrypt from "bcrypt"
import adminModel from "../models/adminModels.js";
import { generateCookie } from "../middleware/cookie.js"

export const adminSignup = async (req, res) => {
    const { name, email, password } = req.body;
    let admin = await adminModel.findOne({ email });
    if (admin) {
        return res.status(400).json({
            success: false,
            message: `${email} already exits`,
        })
    }
    else {
        const hashPassword = await bcrypt.hash(password, 10);
        admin = await adminModel.create({
            name,
            email,
            password: hashPassword
        })
        generateCookie(admin, res, 201, "admin Register Successfully");
    }
}


export const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({ email });
    if (!admin) {
        return res.status(401).json({
            success: false,
            message: `${email} doest not exist`
        })
    }
    else {
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: `${email} is correct but the password is wrong.`
            })
        }
        else {
            generateCookie(admin, res, 201, `Welcome ${admin.name}`);
        }
    }
}


export const adminLogout = (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "logout successfully"
    })
}


export const adminProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        admin: req.admin
    })
}