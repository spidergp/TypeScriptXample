import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const HorarioXDia = db.define(
    'HorariosXDia',
    {
        idhorario: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        idparamdiasemana: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        lugares: DataTypes.INTEGER
      },
      {
          tableName:'HorariosXDia',
          timestamps: false
      }
);

export default HorarioXDia;