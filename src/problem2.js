const fs = require("fs");
const knex = require("../index");
async function problem2() {
  try {
    const ans = await knex
      .select("season", "winner")
      .count("winner as no of matches won")
      .from("matches")
      .where("winner", "!=", "")
      .groupBy("season", "winner");
    console.log(ans);
    fs.writeFile("./output/problem2.js", JSON.stringify(ans), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (e) {
    console.log(e.message());
  }
}
problem2().finally(() => {
  knex.destroy();
});
