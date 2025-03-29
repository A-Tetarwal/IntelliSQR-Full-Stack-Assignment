
import express from 'express';
import { getProfile } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = express.Router();

// All user routes require authentication
router.use(authenticate);

router.get('/profile', getProfile);

export default router;
