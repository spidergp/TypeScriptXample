import { DataTypes } from 'sequelize';
import db from '../../db/connection';

const Turno = db.define(
    'Turno',
    {
        fechasolicitud: { type: DataTypes.DATE },
        fechahoradesde: { type: DataTypes.DATE },
        fechahorahasta: { type: DataTypes.DATE },
        idcliente: { type: DataTypes.INTEGER},
        vigente: { type: DataTypes.BOOLEAN, defaultValue: 1 },
        fechacreacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        fechaultimamodificacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    },
    {
        tableName: 'Turno',
        timestamps: false
    }
);

export default Turno;
