import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from '../controllers/products.js';
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from '../verifyToken.js';

const router = express.Router();

//CREATE
router.post('/', verifyTokenAndAdmin, createProduct);

//UPDATE
router.put('/:id', verifyTokenAndAdmin, updateProduct);

//DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

//@GET PRODUCT
router.get('/find/:id', getProduct);

//@GET ALL PRODUCTS
router.get('/', getAllProducts);

export default router;
