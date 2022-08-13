import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getStatsUsers,
  getUser,
  updateUser,
} from '../controllers/user.js';
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from '../verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateUser);

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

//@GET ROUTE
router.get('/find/:id', verifyTokenAndAdmin, getUser);

//@GET ALL USER ROUTE
router.get('/', verifyTokenAndAdmin, getAllUsers);

//@GET ALL USER ROUTE
router.get('/stats', verifyTokenAndAdmin, getStatsUsers);

export default router;
