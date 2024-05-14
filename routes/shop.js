const path = require("path");

const express = require("express");
const isLoggedInMiddleWare = require("../middleware/is_auth");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", isLoggedInMiddleWare, shopController.getIndex);

router.get("/products", isLoggedInMiddleWare, shopController.getProducts);

router.get(
  "/products/:productId",
  isLoggedInMiddleWare,
  shopController.getProduct
);

router.get("/cart", isLoggedInMiddleWare, shopController.getCart);

router.post("/cart", isLoggedInMiddleWare, shopController.postCart);

router.post(
  "/cart-delete-item",
  isLoggedInMiddleWare,
  shopController.postCartDeleteProduct
);

router.post("/create-order", isLoggedInMiddleWare, shopController.postOrder);

router.get("/orders", isLoggedInMiddleWare, shopController.getOrders);

module.exports = router;
