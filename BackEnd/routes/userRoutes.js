const express = require("express")
const router =   express.Router();
const {createProduct,home, UpdateInstrument} = require("../controllers/createProduct")
const {createProductTitle,updateProductTitle} = require("../controllers/createProductTitle")
const {getProductTitle} = require("../controllers/getProductTitle")


router.post("/addProduct",createProduct);
router.post("/UpdateInstrument/:id",UpdateInstrument);
router.post("/addProductTitle",createProductTitle);
router.post("/updateProductTitle/:id",updateProductTitle);
router.get("/getProductTitle",getProductTitle);
router.get("/Home",home);

module.exports = router;    