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
      console.log(client);
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The Server is running sucessfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
