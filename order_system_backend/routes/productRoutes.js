import { Router } from 'express'
import { isAuthenticated } from '../middleware/auth.js';
import { createProduct, getAllProduct, getAllProductOfAdmin } from '../controllers/productControllers.js'

const router = Router();

router.post('/create', isAuthenticated, createProduct);
router.get('/all', getAllProduct);
router.get('/admin', isAuthenticated, getAllProductOfAdmin)

export default router
