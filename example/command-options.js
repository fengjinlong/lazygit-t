const cli = require("cac")();
cli
  .command("rm <dir>", "Remove a dir")
  .option("-r, --recursive", "Remove recursively")
  .action((dir, option) => {
    console.log("remove", div + (options.recursively ? " recursively" : ""));
  });
cli.help();
cli.parse();
