import { Router } from "express";
import { addProductdetail, addToCart, addproductImage, deleteProductByid, getAllProduct, getCartData, getpopulatwomenItem, new_collection, removeCartItem } from "../controller/product.controller.js";
import { upload } from "../middleware/multers.js";
import handleauthentication from "../middleware/auth.js";
const router = Router()


router.route('/upload').post(upload.single('product'), addproductImage)
router.route('/addproduct').post(addProductdetail)
router.route('/deleteproduct').post(deleteProductByid)
router.route('/gatAllProduct').get(getAllProduct)
router.route('/newcollections').get(new_collection)
router.route('/popularwomenitem').get(getpopulatwomenItem)
router.route('/addtocart').post(handleauthentication,addToCart)
router.route("/removetocart").post(handleauthentication,removeCartItem)
router.route("/getcartitem").post(handleauthentication,getCartData)



export default router