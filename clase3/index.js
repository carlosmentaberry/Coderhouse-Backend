const fs = require('fs');

try{

    let fyh = new Date();
    console.log(fyh.toString());
    fs.writeFileSync("./fyh.txt", fyh.toUTCString(), "utf-8");
    
    let fechayhora = fs.readFileSync("./fyh.txt", "utf-8");
    console.log(fechayhora);
} 
catch (ex) {
    console.log(ex);
}


