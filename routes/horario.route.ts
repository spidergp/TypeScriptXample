import { Router } from 'express';
import { getHorarioByHora } from '../controllers/horario.controller';

const router = Router();

router.get('/getby-hora/:pszHora', getHorarioByHora);
/*
router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);
*/

export default router;   