const fs = require("fs");
const knex = require("../index");
async function problem8() {
  try {
    const res = await knex
      .select("bowler", "player_dismissed")
      .count("player_dismissed as NoOfTimesplayerDismissed")
      .from("deliveries")
      .where("player_dismissed", "!=", "")
      .groupBy("bowler", "player_dismissed")
      .orderBy("NoOfTimesplayerDismissed", "desc")
      .limit("1");

    console.log(res);
    fs.writeFile("./output/problem8.js", JSON.stringify(res), (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
problem8().finally(() => {
  knex.destroy();
});
