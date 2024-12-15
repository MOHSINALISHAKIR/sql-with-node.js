const { faker } = require("@faker-js/faker");
// Get the client
const mysql = require("mysql2");

const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.static())
const port = 8080;

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "7080",
});

app.listen(port, () => {
  console.log("listing ");
});
app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
    //   console.log(result[0][ "count(*)" ]);

    let count =result[0][ "count(*)" ]
      res.render("home.ejs",{count})
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/user", (req, res) => {
    let q = `select * from user`;
    try {
      connection.query(q, (err, result) => {
        if (err) {
          throw err;
        }
      //   console.log(result[0][ "count(*)" ]);
  
      let data=result;
        res.render("show.ejs",{data})
      });
    } catch (err) {
      console.log(err);
    }
  });
  
  

//inserting new data into user tables
// let user = ["123", "123-newuser", "123@gmail.com", "123"];

// let createRandomUser = () => {
//     return [
//       faker.string.uuid(),
//       faker.internet.username(),
//       faker.internet.email(),
//       faker.internet.password(),

//     ];
//   };

//   let data=[];
//   for (let index = 0; index <= 100; index++) {

//     data.push(createRandomUser());

//   }

// let q = "INSERT INTO user (id , username,email,password) VALUES ?";

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();
// console.log(data.length);

// console.log(createRandomUser());
