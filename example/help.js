const cli = require("cac")();
cli.option("--type [type]", "Choose a project type", {
  default: "node",
});
cli.option("--name <name>", "Provide your name");
cli.help();
cli.version("0.0.0");
cli.parse();
