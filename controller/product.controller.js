import { Product } from "../models/product.model.js"
import { User } from "../models/user.model.js"

const addproductImage = (req, res) => {
    res.json({
        status: 1,
        image_url: `http://localhost:${process.env.PORT}/imgae/${req.file.filename}`
    })
}


const addProductdetail = async (req, res) => {
    const { name, image, category, new_price, old_price } = req.body
    let product = await Product.find({})
    let id;
    if (product.length > 0) {
        let last_product_array = product.slice(-1)
        let last_product = last_product_array[0];
        id = last_product.id + 1
    }
    else {
        id = 1;
    }
    const data = await Product.create({
        id: id,
        name,
        image,
        category,
        new_price,
        old_price
    })
    if (!data) {
        res.json({
            Error: "Data is not save",
            status: 404
        })
    }
    res.json({
        message: "Data save Succsessfully",
        data
    })
}


const deleteProductByid = async (req, res) => {
    try {
        console.log(req.body.id);
        const result = await Product.findOneAndDelete({ id: req.body.id })
        console.log(result);
        res.json({
            message: "delete successfully"
        })
    } catch (error) {
        console.log('Error:', error);
    }
}

// geting all product
const getAllProduct = async (req, res) => {
    let allProduct = await Product.find({})
    res.json({
        allProduct
    })
}


const new_collection = async (req, res) => {
    const newCollection = await Product.find({})
    const proNewCollection = newCollection.slice(1).slice(-8)
    res.json({
        proNewCollection
    })
}

const getpopulatwomenItem = async (req, res) => {
    const item = await Product.find({ category: "women" })
    const popularItem = item.slice(0, 4)
    res.json({ popularItem })
}



const addToCart = async (req, res) => {
    let userData = await User.findOne({ _id: req.user._id })
    userData.cartData[req.body.itemid] += 1;
    await User.findByIdAndUpdate({ _id: req.user._id }, { cartData: userData.cartData });
    res.send("Added")
}


const removeCartItem = async (req, res) => {
    let userData = await User.findOne({ _id: req.user._id })
    if (userData.cartData[req.body.itemid] > 0) {
        userData.cartData[req.body.itemid] -= 1;
        await User.findByIdAndUpdate({ _id: req.user._id }, { cartData: userData.cartData });
        res.send("Added")
    }
}


const getCartData = async (req, res) => {
    const cartItem = await User.findOne({ _id: req.user._id })
    res.json(cartItem.cartData)
}

export {
    addproductImage,
    addProductdetail,
    deleteProductByid,
    getAllProduct,
    new_collection,
    getpopulatwomenItem,
    addToCart,
    removeCartItem,
    getCartData
}