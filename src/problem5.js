const fs = require("fs");
const knex = require("../index");
async function problem5() {
  try {
    const ans = await knex
      .select("winner")
      .count("winner as no of match ")
      .from("matches")
      .whereRaw("winner LIKE toss_winner")
      .groupBy("winner");
    console.log(ans);

    fs.writeFile("./output/problem5.js", JSON.stringify(ans), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
problem5().finally(() => {
  knex.destroy();
});
