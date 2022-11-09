import { AutoMap } from "@automapper/classes";

class Horario {
    @AutoMap()
    id : Number=0;
    @AutoMap()
    horadesde = new Date();
    @AutoMap()
    horahasta = new Date();
    @AutoMap()
    fechacreacion = new Date();
    @AutoMap()
    fechaultimamodificacion = new Date();
  }
  
  export default Horario;
  