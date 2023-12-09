const fs = require("fs");
const knex = require("../index");
async function function9() {
  try {
    const res = await knex
      .select("bowler")
      .select(
        knex.raw(
          "(sum(total_runs)/(sum(case when noball_runs = 0 and wide_runs = 0 then 1 else 0 end )/6)) as economy"
        )
      )
      .from("deliveries")
      .where("is_super_over", "1")
      .groupBy("bowler")
      .orderBy("economy")
      .limit("1");
    console.log(res);
    fs.writeFile("./output/problem9.js", JSON.stringify(res), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
function9().finally(() => {
  knex.destroy();
});
