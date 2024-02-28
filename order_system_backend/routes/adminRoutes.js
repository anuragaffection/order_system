import { Router } from "express";
import { adminSignup, adminLogin, adminProfile, adminLogout } from "../controllers/adminControllers.js";
import { isAuthenticated } from "../middleware/auth.js"


const router = Router();

router.post('/signup', adminSignup)
router.post('/login', adminLogin)
router.get('/logout', adminLogout)
router.get('/profile', isAuthenticated, adminProfile)


export default router;