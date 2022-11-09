import woHorarioXDiaREP from '../dal/repositories/horarioxdia.rep';
import HorarioXDia from '../models/horarioxdia';

import { createMap } from '@automapper/core';
import { mapper } from '../mappings/mapper';

class HorarioXDiaService  {
    constructor() {
        
    }

    async getHorariosXDiaByHorarioYDia(piIdHorario:Number,piIdDiaSemana:Number){

        var woHorariosXDia = new HorarioXDia();

        const wohorariosXDiaRP = await woHorarioXDiaREP.getHorariosXDiaByHorarioYDia(piIdHorario,piIdDiaSemana);
        //do something

        woHorariosXDia.idhorario = wohorariosXDiaRP.idhorario;
        woHorariosXDia.idparamdiasemana = wohorariosXDiaRP.idparamdiasemana;
        woHorariosXDia.lugares = wohorariosXDiaRP.lugares;

        return woHorariosXDia;
      }
      
}

const woHorarioXDiaSVC = new HorarioXDiaService();
export default woHorarioXDiaSVC;
