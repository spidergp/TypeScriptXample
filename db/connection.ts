import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test', 'g2ventasuser', 'g2ventas', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;