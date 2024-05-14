const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");
const isLoggedInMiddleWare = require("../middleware/is_auth");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isLoggedInMiddleWare, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isLoggedInMiddleWare, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  isLoggedInMiddleWare,
  adminController.postAddProduct
);

router.get(
  "/edit-product/:productId",
  isLoggedInMiddleWare,
  adminController.getEditProduct
);

router.post(
  "/edit-product",
  isLoggedInMiddleWare,
  adminController.postEditProduct
);

router.post(
  "/delete-product",
  isLoggedInMiddleWare,
  adminController.postDeleteProduct
);

module.exports = router;
