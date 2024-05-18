
const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const connectDatabase = () => {
    try {
        const sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            logging: false,
            define: {
                timestamps: true,
                freezeTableName: true
            },
            query: {
            raw: true,
            },
            timezone: '+07:00',
        });
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return sequelize
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDatabase