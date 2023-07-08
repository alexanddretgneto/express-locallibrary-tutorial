const mongoose = require("./index");
const usuarios = require('../models/user');

  usuarios.create({
  "nome": "ffffff",
  "sobrenome": "neto",
  "email":"alexandretggneto@gmail.com",
  "senha":"123"
  
})


module.exports = usuarios;