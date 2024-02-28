import mongoose from 'mongoose'


const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    basePrice: {
        type: Number,
        require: true
    },
    discountPercentage: {
        type: Number,
        require: true,
    },
    imageUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'adminModel',  //'adminModel' should be a string representing the name of the schema in MongoDB
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const productModel = mongoose.model('products', productSchema);

export default productModel;