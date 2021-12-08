console.log(process.cwd());
console.log(process.pid);
console.log(process.version);
console.log(process.title);
console.log(process.platform);
console.log(process.memoryUsage());

//exit
setInterval(() =>{
    console.log("executing");
}, 1000);

setTimeout(() =>{
    process.exit(100);
}, 3000);

process.on("exit", (code) =>{
    console.log(process.stdOut);
    console.log(process.execPath);
    console.log("closing ", code);
});
