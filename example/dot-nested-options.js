const cli = require("cac")();
cli
  .command("build", "dest")
  .option("--env <env>", "Set envs")
  .example("--env.API_SECRET xxx")
  .action((options) => {
    console.log("options", options);
  });
cli.help();
// Listen to the `foo` command
cli.on('command:build', () => {
  // Do something
  console.log('11', 11111);
  
})

// Listen to the default command
cli.on('command:!', () => {
  // Do something
})

// Listen to unknown commands
cli.on('command:*', () => {
  console.error('Invalid command: %s', cli.args.join(' '))
  process.exit(1)
})
cli.parse();