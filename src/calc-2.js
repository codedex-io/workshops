const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const mathjs = require("mathjs");

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 --expr [str]")
  .demandOption(["expr"]).argv;

function main() {
  const { expr } = argv;
  console.log(mathjs.evaluate(expr));
}

main();
