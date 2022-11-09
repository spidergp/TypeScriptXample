import { request, Request, Response } from 'express';
import woTurnoSVC from '../services/turno.service';
const moment = require('moment');
import { handleHttp } from "../utils/error.handle";


export const getTurnosByFechaHora = async (req: Request, res: Response) => {

    const { pszFechaHora } = req.params;
    var wdtFechaHora: Date;
    wdtFechaHora = new Date(moment(pszFechaHora, "YYYY-MM-DD[T]HH:mm"));
    wdtFechaHora = moment.tz(wdtFechaHora, "America/Buenos_Aires");

    let woTurnos = await woTurnoSVC.getTurnosByFechaYHora(wdtFechaHora);

    if (woTurnos) {
        res.json(woTurnos)
    } else {
        res.status(404).json({
            msg: `No existen Turnos para la fecha indicada ${wdtFechaHora}`
        })
    }
}

export const createTurno = async (req: Request, res: Response) => {

    const { body } = req.body;
    
    console.log(body);
    try{
        const createdTurno = await woTurnoSVC.create(body);
        res.send(createdTurno);
    }catch (e){
        handleHttp(res,"ERROR_POST_ITEM",e);
    }
}


export const getTurnos = async (req: Request, res: Response) => {

    const listTurnos = await woTurnoSVC.getAll()

    if (listTurnos) {
        res.json(listTurnos)
    } else {
        res.status(404).json({
            msg: `No existen Turnos }`
        })
    }
}
    //const turno = mapper(TurnoDto, createdTurno);
/*
return res.status(201).send({
  payload: turno
});
*/

