import productModel from "../models/productModels.js";
import adminModel from "../models/adminModels.js";

export const createProduct = async (req, res) => {
    const { title, basePrice, discountPercentage, imageUrl, description } = req.body;

    const product = await productModel.create({
        title,
        basePrice,
        discountPercentage,
        imageUrl,
        description,
        admin: req.admin // at the time of signup or login 
    })

    res.status(200).json({
        success: true,
        message: "Product created Successfully",
        data: product
    })
}


export const getAllProduct = async (req, res) => {
    const product = await productModel.find({});

    if (!product) return res.status(404).json({
        success: false,
        message: "There is no product in our db "
    })

    res.json({
        success: true,
        message: "All product are here ",
        data: product
    })
}


export const getAllProductOfAdmin = async (req, res) => {
    const adminId = req.admin._id; // _id by default in mongodb 
    const product = await productModel.find({ admin: adminId }); // mongodb 
    const admin = await adminModel.findOne({ _id : adminId });
    // console.log(admin);

    res.status(200).json({
        success: true,
        message: `All product of ${admin.name} are here`,
        data: product
    })

}