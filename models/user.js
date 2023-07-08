const mongoose = require("../database/index");



const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  senha: {
    type: String,
    required: true,
    select:false,
    
  },
  createAd:{
    type:Date,
    default:Date.now
  }
});



module.exports = mongoose.model('Usuario', usuarioSchema);
