const cli = require("cac")();
cli
  .command("[...files]", "Build files")
  .option("--minimize", "Minimize output")
  .action((files, options) => {
    console.log("files", files);
    console.log("o.m", options.minimize);
  });
cli.parse();
export let obj = {};
