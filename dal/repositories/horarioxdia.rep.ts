import BaseRep from "./base.rep";
import { Request, Response } from 'express';
import HorarioXDia from "../models/horarioxdia";
const Sequelize = require("sequelize");
const { gt, lte, ne, in: opIn } = Sequelize.Op;

class HorarioXDiaRep extends BaseRep {
    constructor() {
        super(HorarioXDia);
    }


    async getHorariosXDiaByHorarioYDia(piIdHorario: Number,piIdDiaSemana: Number): Promise <any> {
        const woHorarioXDia = HorarioXDia.findOne({ 
            where: { 
                idhorario: piIdHorario,
                idparamdiasemana: piIdDiaSemana 
            } 
        });
    }


}

const woHorarioXDiaDal = new HorarioXDiaRep();

export default woHorarioXDiaDal;