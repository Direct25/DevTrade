import express from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { createTransaction, getTransactionById, getUserTransactions, updateTransactionStatus } from '../controllers/transaction.controller.js';

const router = express.Router();

router.post('/create', authMiddleware, createTransaction);
router.get('/getById/:id', authMiddleware, getTransactionById);
router.get('/getUserTransactions/:userId', authMiddleware, getUserTransactions);
router.patch('/updateStatus/:id', authMiddleware, updateTransactionStatus);

export default router;