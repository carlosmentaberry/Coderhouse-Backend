export const asPOJO = obj => JSON.parse(JSON.stringify(obj))

export const renameField = (record, from, to) => {
    record[to] = record[from]
    delete record[from]
    return record
}
export const removeField = (record, field) => {
    const value = record[field]
    delete record[field]
    return value
}

export const returnInfo = () => {
    return {
        args: process.argv,
        OS: process.platform,
        NodeVersion: process.version,
        ExecPath: process.execPath,
        ProcessId: process.pid,
        ProjectFolder: process.cwd(),
        ReservedMemory: process.memoryUsage().rss
    }
}

const random = (num) => {
    let r = 0;
    let array = [];
    let dict = {};
    for (let i = 0; i <= num; i++) {
        r = Math.trunc(getRandomInt(1, num));
        array.push(r);
    }
    for (var i = 0; i < array.length; i++) {
        dict[array[i]] = dict[array[i]] ? dict[array[i]] + 1 : 1;
    }
    return dict;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

process.on("message", (message) => {
    console.log(message)
    console.log(num)
    if (message === "START") {
        let sum = random(num)
        process.send(sum);
    } else {
        console.log("no se inició el proceso")
    }
});
