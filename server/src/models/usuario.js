var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var Usuario = new Schema({  
    usuario: {type: String, required: true},  
    senha: {type: String, required: true},
    email: {type: String, required: true},
    pessoa_nome: {type: String, required: true},
    usuario_perfil: [String],
});
   
var Usuario = mongoose.model('Usuario', Usuario);
module.exports = Usuario;