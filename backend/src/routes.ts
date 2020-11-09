import { Router } from 'express';
import PostsController from './controllers/PostsController';

const router = Router();

router.get('/posts', PostsController.index);
router.post('/posts', PostsController.store);

router.get('/posts/:id', PostsController.details);
router.delete('/posts/:id', PostsController.delete);

export default router;