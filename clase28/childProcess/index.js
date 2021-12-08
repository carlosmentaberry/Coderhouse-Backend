const {exec, spawn} = require("child_process");

// exec("dir", (err, stdOut, stderr) =>{
//     if(err){
//         console.log(`Error err ${err}`);
//         return;
//     }
//     if(stderr){
//         console.log(`Error stderr ${stderr}`);
//         return;
//     }
//     console.log(`stdOut ${stdOut}`);
// })

const child = spawn("notepad.exe", ['c:\\']);

child.stdout.on("data", (data) => {
    console.log(`stdout ${data}`);
})

child.stderr.on("data", (data) => {
    console.log(`stderr ${data}`);
})