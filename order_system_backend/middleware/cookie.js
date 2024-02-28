import Jwt from "jsonwebtoken";

export const generateCookie = (admin, res, statusCode = 200, message) => {

    const token = Jwt.sign({ _id: admin._id }, process.env.TOKEN);

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 30 * 60 * 1000,
        sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure : process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        message : message,
        data: admin
    })
}