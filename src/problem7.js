const fs = require("fs");
const knex = require("../index");
async function problem7() {
  try {
    const ans = await knex
      .select("season", "batsman")
      .select(
        knex.raw(
          "round(((SUM(ABS(total_runs - extra_runs))) /(SUM(CASE WHEN noball_runs = 0 AND wide_runs = 0 THEN 1 ELSE 0 END))*100),2 )as strike_rate "
        )
      )
      .from("deliveries")
      .leftJoin("matches", "deliveries.match_id", "matches.id")
      .groupBy("batsman", "season")
      .orderBy("season");
    console.log(ans);

    fs.writeFile("./output/problem7.js", JSON.stringify(ans), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
problem7().finally(() => {
  knex.destroy();
});
