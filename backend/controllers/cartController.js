import userModel from "../models/userModel.js";

// add item to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        const data = req.body?.data;
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            data.foodId = 1;
            cartData[req.body.itemId] = [data];
        } else {
            let maxValue = cartData[req.body.itemId].reduce((acc, value) => {
                return (acc = acc > value.foodId ? acc : value.foodId);
            }, 0);
            data.foodId = maxValue + 1;
            cartData[req.body.itemId].push(data);
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// remove item from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId].length > 0) {
            const data = req.body?.data;
            cartData[req.body.itemId] = cartData[req.body.itemId].filter((cart) => !(cart.weight == data.weight && cart.foodId == data.foodId))
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed From Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        console.log(userData);
        let cartData = await userData?.cartData;
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { addToCart, removeFromCart, getCart };