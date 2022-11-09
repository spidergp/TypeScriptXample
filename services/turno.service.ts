import woTurnoREP from '../dal/repositories/turno.rep';
import Turno from '../models/turno';
import Horario from '../models/horario';
import woHorarioSVC from './horario.service';
import woHorariosXDiaSVC from './horariosxdia.service';


class TurnoService {
    constructor() {
    }

    async getTurnosByFechaYHora(ptHora: Date) {
        return await woTurnoREP.getTurnosByFechaYHora(ptHora);
    }
    /*
    async create(poTurno: Turno){
        const createdTurno = await woTurnoREP.create(poTurno);
        return createdTurno;
    }
    */

    async create(poTurno: Turno) {


        const woTurnoCreated = await woTurnoREP.create(poTurno);

        return woTurnoCreated;
        /*
        var woHorario: Horario;
        
        console.log ("Turno en TurnoService" + poTurno.fechahoradesde);


        woHorario = await woHorarioSVC.getHorarioByHora(poTurno.fechahoradesde);      
           
        if (!woHorario) return null;
    
      //piIdDiaSemana = 1 Lunes
    
        const wlstHorariosXDia = await woHorariosXDiaSVC.getHorariosXDiaByHorarioYDia(woHorario.id,1);
        //do something
        if (!wlstHorariosXDia) return null;

        console.log(wlstHorariosXDia);
    
        /*
        //Buscar Turnos por dia y horario
        const turnosOtorgados = await this.getTurnosByFechaYHora(poTurno.fechahoradesde);
    
        if (horariosXDia.lugares - turnosOtorgados.count() <= 0){
          return null;
        }
    
        poTurno = mapper(this.entityToMap, poTurno);
        const woTurnoCreated = await this._entityRepository.create(poTurno);
        return mapper(this.entityToMap, woTurnoCreated.toJSON());
        */
      }
  
    async getAll() {
        return await woTurnoREP.getTurnos();
    }

}

const woTurnoSVC = new TurnoService();
export default woTurnoSVC;
