import foodModel from "../models/foodModel.js";
import fs from 'fs';


// add food item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
        img: {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype
        }
    });
    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// get food image
const getFoodImage = async (req, res) => {
  const image = await foodModel.findById(req.params.id);

  res.set("Content-Type", image.img.contentType);
  res.send(image.img.data);
};

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

export { addFood, getFoodImage, listFood, removeFood };