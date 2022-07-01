const cli = require("cac")();
cli
  .command("build <entry> [...otherFiles]", "Build your app")
  .option("--foo", "Foo option")
  .action((entry, otherFiles, options) => {
    console.log("entry", entry);
    console.log("of", otherFiles);
    console.log("op", options);
  });
cli.help();
cli.parse();
