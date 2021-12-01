const parseArgs = require("minimist");

const yargs = require("yargs/yargs")(process.argv.slice(2))

// const options = {default: {name:"charly",lastname:"mentaberry"}}

// console.log(parseArgs(process.argv, options));

// const options = {alias: {a:"CampoA",b:"CampoB"}}

// console.log(parseArgs(process.argv.slice(2), options));

// const options = { alias: { m: "modo", p: "puerto", d: "debug" } }
// const options2 = { default: { modo: "prod", puerto: "0", debug: "false" } }
// const obj = parseArgs(process.argv.slice(2), options2)
// obj["otros"] = obj._;
// delete obj._
// delete obj["m"]
// delete obj["p"]
// delete obj["d"]

// console.log(obj);
//1 2 3 -m dev -p 8080 -d

const args = yargs.default({
nombre:"charly",
apellido:"mentaberry"
}).argv;

console.log(args)