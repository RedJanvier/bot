import { Router } from 'express';
import responseRoutes from './responses';

const router = Router();

router.get('/', (req, res) => res.status(200).json({ status: 200, message: 'Welcome to bot', data: {} }));
router.use('/responses', responseRoutes);

export default router;
