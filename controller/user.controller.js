import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const signUpUser = async (req, res) => {
    const { name, email, password } = req.body

    try {
        if ((name === "" || email === "")) {
            return res.status(400).json({ message: "All fieled is required" })
        }

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "User already exist" })

        let cart = {}

        for (let i = 0; i < 300; i++) {
            cart[i] = 0
        }

        const result = await User.create({
            name,
            email,
            password,
            cartData: cart
        })

        if (!result) return res.status(500).json({ message: "Sever side issue" })

        res.status(200).json({ message: "New user created succsessfully", result })
    } catch (error) {
        console.log("Error:", error);
    }
}


const handlelogedIn = async (req, res) => {
    const { email, password } = req.body
    try {
        if (email === "" || password === "") return res.status(400).json({ message: "All fieled are required" })

        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ message: "Enter a valid email" })

        if (!(password === user.password)) return res.status(400).json({ message: "Invalid caredintion" })

        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email
        }, process.env.SECERET_KEY, { expiresIn: process.env.SECERET_KEY_DURATION })

        return res
            .status(200)
            .json({ message: "user logged in" ,token })

    } catch (error) {
        return res.status(500).json({ message: error })
    }

}

export {
    signUpUser,
    handlelogedIn
}
