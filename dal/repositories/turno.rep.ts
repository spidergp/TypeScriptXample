import Base from "./base.rep.js";
import { Request, Response } from 'express';
import Turno from '../models/turno';
const Sequelize = require("sequelize");
const { gte, lte, ne, in: opIn } = Sequelize.Op;

class TurnoDal extends Base {
    constructor() {
        super(Turno);
    }

    async getTurnosByFechaYHora(pdtFechaHora: Date) {

        return Turno.findAll({
            where: {
                fechahoradesde: {
                    [lte]: pdtFechaHora
                },
                fechahorahasta: {
                    [gte]: pdtFechaHora
                }
            }
        });
    }

    async getTurnos() {
        return Turno.findAll({
        });
    }
}

const woTurnoDAL = new TurnoDal();

export default woTurnoDAL;