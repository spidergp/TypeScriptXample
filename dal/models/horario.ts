import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const Horario = db.define(
    'Horario',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
        horadesde: DataTypes.DATE,
        horahasta: DataTypes.DATE,
        vigente: { type: DataTypes.BOOLEAN, defaultValue: 1 },
        fechacreacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        fechaultimamodificacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    },
    {
        tableName: 'Horario',
        timestamps: false
    }
);

export default Horario;

