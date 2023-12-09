//problem 1
const fs = require("fs");
const knex = require("../index");
knex
  .select("season")
  .count("season as no_of_matches")
  .from("matches")
  .groupBy("season")
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    fs.writeFile("./output/problem1.js", JSON.stringify(data), (err, data) => {
      if (err) {
        return err;
      }
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    knex.destroy();
  });
