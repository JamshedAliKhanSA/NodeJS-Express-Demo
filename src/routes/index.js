  const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/api/product/categories",productController.index);
router.post("/api/product/categories/store",productController.addCategories);

router.get("/api/product/:id",productController.product);
router.post("/api/product/store",productController.addProduct);

router.get("/api/product/show/:id",productController.show);

router.get("/api/product/edit/:id",productController.editProduct);
router.post("/api/product/edit/:id",productController.updateProduct);

module.exports = router;