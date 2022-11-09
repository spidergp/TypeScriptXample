import { Request, Response } from 'express';
import Horario from '../dal/models/horario';
import woHorarioSVC from '../services/horario.service';
const moment = require('moment');

/*
export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Producto.findAll()

    res.json(listProducts)
}
*/
export const getHorarioByHora = async (req: Request, res: Response) => {

    const { pszHora } = req.params;

    var wtTime: Date;

    //var wtTime = date.parse(pszHora, 'YYYY-MM-DD[T]HH:mm');

    wtTime = new Date(moment(pszHora, "YYYY-MM-DD[T]HH:mm"));
    wtTime = moment.tz(wtTime, "America/Buenos_Aires");
    //console.log(pszHora);
    //console.log(moment.tz(wtTime,"America/Buenos_Aires"));

    //console.log(wtTime);


    //console.log(moment.tz.names());

    //var wtTime = date.parse(pszHora, 'YYYY-MM-DD[T]HH:mm');

    const woHorario = await woHorarioSVC.getHorarioByHora(wtTime);

    if (woHorario) {
        res.json(woHorario)
    } else {
        res.status(404).json({
            msg: `No existe un horario para la hora desde ${pszHora}`
        })
    }
}

