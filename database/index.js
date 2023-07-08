const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://myAtlasDBUser:secreta123@myatlasclusteredu.yitubko.mongodb.net/api-mongoDB?retryWrites=true&w=majority",
  {}
)
.then(() => {
  console.log('Autenticado com o MongoDB PELA PASTA DATABASE no index.js');
})
.catch((error) => {
  console.log('Falha ao autenticar na pasta database');
  console.log(error);
});




// ProviderDBouColection.create({
//   "firtName":"Couveflor",
//   "Company":{"CompanyaName":"Plugin","Endereço":"Amazonas",},
//   "Sexo":"2x Ao dia"
// })

mongoose.Promise = global.Promise;
module.exports = mongoose;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://myAtlasDBUser:secreta123@myatlasclusteredu.yitubko.mongodb.net/alex-api-yt?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);