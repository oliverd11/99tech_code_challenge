import express from 'express';
import * as resourceController from '../controllers/resourceController';

const router = express.Router();

router.post('/', resourceController.createResource);
router.get('/', resourceController.getResources);
router.get('/:id', resourceController.getResourceById);
router.put('/:id', resourceController.updateResource);
router.delete('/:id', resourceController.deleteResource);

export default router;
