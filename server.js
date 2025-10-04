const http = require("http");
const mongodb = require("mongodb");
let db;

const connectionString =
  "mongodb+srv://murodjon:DsZyS6xznRFis3WY@cluster0.z3sog5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR: on connecton mongoDB");
    else {
      console.log("mongoDB on connection succeed");

      db = client.db(); // <--- shu qatorni qo‘sh
      module.exports = { db }; // <--- db ni eksport qil

      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 4013;
      server.listen(PORT, function () {
        console.log(
          `The Server is running sucessfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
