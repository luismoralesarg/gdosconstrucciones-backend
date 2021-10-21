const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
require("dotenv").config();

// routes
app.use('/api/auth', require('./router/authRoute'));
app.use('/api/egresos', require('./router/egresosRoute'));
//app.use('/api/ingreso', require('./router/ingresoRoute'));
app.use('/api/analisis-costos', require('./router/analisisCostosRoute'));
app.use('/api/formas-pago', require('./router/formasPagoRoute'));
app.use('/api/proyectos', require('./router/proyectosRoute'));
app.use('/api/comprobante-pago', require('./router/comprobantePagoRoute'));

// port
const port = process.env.PORT || 5030 ;

// listen.port
app.listen(port, () => {
    //console.log(`Aplicacion en el puerto ${port}`);
});