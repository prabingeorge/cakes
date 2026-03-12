import express from 'express';
import { addMenu, listMenu, removeMenu } from '../controllers/menuController.js';
import multer from 'multer';

const menuRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "uploads-menu",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

menuRouter.post("/menu-add", upload.single("image"), addMenu);
menuRouter.get("/menu-list", listMenu);
menuRouter.post("/menu-remove", removeMenu);

export default menuRouter;