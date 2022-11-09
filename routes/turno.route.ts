import { Router } from 'express';
import { getTurnosByFechaHora,createTurno, getTurnos } from '../controllers/turno.controller';

const router = Router();

router.get('/', getTurnos);
router.get('/getby-fechayhora/:pszFechaHora', getTurnosByFechaHora);
router.post('/',createTurno);

/*
router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);
*/

export default router;   