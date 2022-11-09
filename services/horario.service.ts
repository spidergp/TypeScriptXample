import woHorarioREP from '../dal/repositories/horario.rep';
import Horario from '../models/horario';

import { createMap } from '@automapper/core';
import { mapper } from '../mappings/mapper';

class HorarioService  {
    constructor() {
        
    }

    async getHorarioByHora(ptHora: Date): Promise<Horario> {
    
        var woHorario = new Horario();
        
        const woHorarioRP = await woHorarioREP.getHorarioByHora(ptHora);
        
        //woHorario.id = woHorarioRP.id;
        if (!woHorarioRP) {
            console.log("No trajo horario");
            woHorario.id = 0
            return woHorario
        };

        /*
        woHorario.id = woHorarioRP.id;
        woHorario.horadesde = woHorarioRP.horadesde;
        woHorario.horahasta = woHorarioRP.horahasta;
        woHorario.fechacreacion = woHorarioRP.fechacreacion;
        */
        console.log("woHorarioRP" + woHorarioRP);

        console.log("Id2" + woHorario.id);


        return woHorario

        /*
        createMap(mapper,Horario);
        
        console.log('woHorarioRP:' + woHorarioRP);
        
        console.log('woHorario:' + mapper.map('HorarioRep', 'Horario',woHorarioREP));

        return mapper.map(woHorario, woHorarioRP.toJSON());
        */
        
    }
}

const woHorarioSVC = new HorarioService();
export default woHorarioSVC;

/*
//import Container from "../containers/container.js";
//import { Request, Response } from 'express';
//import Horario from '../models/horario';
//const Sequelize = require("sequelize");
const { gt, lte, ne, in: opIn } = Sequelize.Op;

class HorarioService extends Container {
    constructor() {
        super(Horario);
    }

    async getHorarioByHora(ptHora: Date) {

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

const woHorarioSVC = new HorarioService();

export default woHorarioSVC;*/
