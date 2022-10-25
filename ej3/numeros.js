const Logger = require('logplease');
const logger = Logger.create('utils');

const esPar = (number) => {
    if(number % 2 == 0){
        return logger.info('el numero es par');
    }else{
        return logger.error('el numero es par');
    }
}

module.exports = {
    esPar
};
