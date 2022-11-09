import BaseRep from "./base.rep";
import { Request, Response } from 'express';
import Horario from "../models/horario";
const Sequelize = require("sequelize");
const { gt, lte, ne, in: opIn } = Sequelize.Op;

class HorarioRep extends BaseRep {
    constructor() {
        super(Horario);
    }

    async getHorarioByHora(ptHora: Date): Promise <any> {

        const woHorario = Horario.findOne({
            where: {
                horadesde: {
                    [lte]: ptHora
                },
                horahasta: {
                    [gt]: ptHora
                }
            }
        });
        
        return woHorario;
    }

}

const woHorarioDal = new HorarioRep();

export default woHorarioDal;