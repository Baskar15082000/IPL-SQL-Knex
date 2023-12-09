const fs = require("fs");
const knex = require("../index");
async function problem3() {
  try {
    const ans = await knex
      .select("batting_team as Team")
      .sum("extra_runs AS Extra_Runs")
      .from("deliveries")
      .leftJoin("matches", function () {
        this.on("deliveries.match_id", "=", "matches.id");
      })
      .where("season", "2016")
      .groupBy("batting_team");
    console.log(ans);
    fs.writeFile("./output/problem3.js", JSON.stringify(ans), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
problem3().finally(() => {
  knex.destroy();
});
