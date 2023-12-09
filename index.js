const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "very_strong_password",
    database: "db",
  },
});
// knex
//   .select("id")
//   .from("matches")
//   .where("id", ">", "9")
//   .where("id", "<", "21")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });
module.exports = knex;
