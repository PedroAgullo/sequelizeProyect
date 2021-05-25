const router = require('express').Router();
const naveController = require('../controllers/nave.controller.js');


//API CRUD PASAJERO

router.get('/', async (req, res) => {
    try {

        res.json(await naveController.allShips());

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {

        const id = req.params.id;
        res.json(await naveController.shipId(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


router.post('/', async (req, res) => {
    try {
        const body = req.body;
        res.json(await naveController.newShip(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


router.put('/', async (req, res) => {
    try {
        const cuerpoDeDatos = req.body;
        res.json(await naveController.modifyShip(cuerpoDeDatos));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await naveController.deleteShip(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;