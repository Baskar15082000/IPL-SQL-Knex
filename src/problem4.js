const fs = require("fs");
const knex = require("../index");
async function problem4() {
  try {
    const ans = await knex
      .select("bowler")
      .select(
        knex.raw(
          "(sum(total_runs)/(sum(case when noball_runs = 0 and wide_runs = 0 then 1 else 0 end )/6)) as economy"
        )
      )
      .from("deliveries")
      .leftJoin("matches", function () {
        this.on("deliveries.match_id", "=", "matches.id");
      })
      .where("season", "2015")
      .groupBy("bowler")
      .orderBy("economy")
      .limit("10");
    console.log(ans);
    fs.writeFile("./output/problem4.js", JSON.stringify(ans), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
problem4().finally(() => {
  knex.destroy();
});
