const cli = require("cac")();
cli.option("--type <type>", "Choose a project type", {
  default: "node",
});
const parsed = cli.parse();
console.log("cc", JSON.stringify(parsed, null, 2));
