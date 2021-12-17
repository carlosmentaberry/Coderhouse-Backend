const log4js = require("log4js");

log4js.configure({
    appenders:{
        myLoggerConsole:{type:"console"},
        myLoggerFile:{type:"file", filename:"info.log"},
        myLoggerFile2:{type:"file", filename:"info2.log"},
    },
    categories:{
        default:{appenders:["myLoggerConsole"], level:"trace"},
        consola:{appenders:["myLoggerConsole"], level:"debug"},
        archivo:{appenders:["myLoggerFile"], level:"warn"},
        archivo2:{appenders:["myLoggerFile2"], level:"info"},
        todos:{appenders:["myLoggerFile", "myLoggerFile2"], level:"error"},
    }
});

const logger = log4js.getLogger();

logger.trace("logger trace");
logger.debug("logger debug");
logger.warn("logger warn");
logger.info("logger info");
logger.error("logger error");
logger.fatal("logger fatal");

const loggerConsola = log4js.getLogger("consola");

loggerConsola.trace("loggerConsola trace");
loggerConsola.debug("loggerConsola debug");
loggerConsola.warn("loggerConsola warn");
loggerConsola.info("loggerConsola info");
loggerConsola.error("loggerConsola error");
loggerConsola.fatal("loggerConsola fatal");

const loggerArchivo = log4js.getLogger("archivo");

loggerArchivo.trace("loggerConsola trace");
loggerArchivo.debug("loggerConsola debug");
loggerArchivo.warn("loggerConsola warn");
loggerArchivo.info("loggerConsola info");
loggerArchivo.error("loggerConsola error");
loggerArchivo.fatal("loggerConsola fatal");

const loggerArchivo2 = log4js.getLogger("archivo2");

loggerArchivo2.trace("loggerConsola trace");
loggerArchivo2.debug("loggerConsola debug");
loggerArchivo2.warn("loggerConsola warn");
loggerArchivo2.info("loggerConsola info");
loggerArchivo2.error("loggerConsola error");
loggerArchivo2.fatal("loggerConsola fatal");

const loggerTodo = log4js.getLogger("todos");

loggerTodo.trace("loggerConsola trace");
loggerTodo.debug("loggerConsola debug");
loggerTodo.warn("loggerConsola warn");
loggerTodo.info("loggerConsola info");
loggerTodo.error("loggerConsola error");
loggerTodo.fatal("loggerConsola fatal");