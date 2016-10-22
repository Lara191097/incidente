var mongoose = require('mongoose');

module.exports = mongoose.model('Incidencia', {
    laboratorio: String,
    maquina: String,
    sistemaOperativo: {
        nombre: String,
        virtual: Boolean,
        comentario: String
    },
    fallas: [{
        fecha: { type: Date, default: Date.now },
        codigo: String,
        descripcion: String,
        estado: String,
        condiciones: String,
        capturas: [{
            imagen: String,
            imagenContentType: String
        }],
        solucion: {
            fecha: Date,
            descripcion: String
        }
    }]
});