const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 --mode [str] --a [num] --b [num]")
  .demandOption(["operation", "a", "b"]).argv;

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
const pow = (a, b) => a ** b;

function main() {
  const { operation, a, b } = argv;
  switch (operation) {
    case "add":
      console.log(add(a, b));
      break;
    case "sub":
      console.log(sub(a, b));
      break;
    case "mul":
      console.log(mul(a, b));
      break;
    case "div":
      console.log(div(a, b));
      break;
    case "mod":
      console.log(mod(a, b));
      break;
    case "pow":
      console.log(pow(a, b));
      break;
    default:
      console.log("Invalid operation");
  }
}

main();
