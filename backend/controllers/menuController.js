import menuModel from "../models/menuModel.js";
import fs from 'fs';


// add menu item

const addMenu = async (req, res) => {

    let image_filename = `${req.file.filename}`;
    const menu = new menuModel({
        name: req.body.name,
        category: req.body.category,
        image: image_filename,
        isShow: true
    });
    try {
        await menu.save();
        res.json({ success: true, message: "Menu Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// all menu list
const listMenu = async (req, res) => {
    try {
        const menus = await menuModel.find({});
        res.json({ success: true, data: menus });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

// remove menu item
const removeMenu = async (req, res) => {
    try {
        const menu = await menuModel.findById(req.body.id);
        fs.unlink(`uploads-menu/${menu.image}`, () => { });

        await menuModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Menu Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

export { addMenu, listMenu, removeMenu };