const { Nave } = require('../models');


class Ship {

    async allShips(){
        console.log(Ship);
        return Nave.findAll();

    }

    async shipId(id){

        return Nave.findByPk(id);

    }

    async newShip(body){
        return Nave.create(body);
    }

        async modifyShip(cuerpoDeDatos){
        return Nave.update(
            //Datos que cambiamos..
            {aforo: cuerpoDeDatos.aforo, reparaciones: cuerpoDeDatos.reparaciones},
            //Donde..
            {where: {id: cuerpoDeDatos.id}}
        )
    }

    async deleteShip(id){

        return Nave.destroy({where: {id: id}});
    }

}

let naveController = new Ship();
module.exports = naveController;