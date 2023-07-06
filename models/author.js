const mongoose = require("mongoose");
const { DateTime } = require("luxon"); // manipulação de data

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Essa linha define um campo virtual chamado name. 
//Um campo virtual é um campo que não é armazenado no banco de dados, 
//mas é calculado com base em outros campos existentes. Neste caso, 
//o campo name é uma concatenação do family_name e first_name.
// Essa linha define um campo virtual chamado name. Um campo virtual é um campo que não é armazenado no banco de dados, mas é calculado com base em outros campos existentes. Neste caso, o campo name é uma concatenação do family_name e first_name.
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

// Virtual for this author instance URL. Aqui, definimos outro campo virtual chamado url, que representa a URL do autor. Ele é calculado usando o _id do autor e é usado para criar um link para o autor em uma aplicação web.

AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});
//Aqui temos um campo virtual chamado lifespan que representa o período de vida do autor. Ele é calculado com base nas datas de nascimento e falecimento do autor. A biblioteca luxon é usada para formatar as datas no formato desejado. O resultado final é uma string que mostra a data de nascimento e a data de falecimento (se disponível), separadas por um hífen.
AuthorSchema.virtual("lifespan").get(function () {
  let lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(
      DateTime.DATE_MED
    );
  }
  lifetime_string += " - ";
  if (this.date_of_death) {
    lifetime_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(
      DateTime.DATE_MED
    );
  }
  return lifetime_string;
});
//
AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_birth).toISODate(); // format 'YYYY-MM-DD'
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.date_of_death).toISODate(); // format 'YYYY-MM-DD'
});

// Export model.
module.exports = mongoose.model("Author", AuthorSchema);
