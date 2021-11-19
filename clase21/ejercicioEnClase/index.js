const {normalize, schema} = require("normalizr");
const empresa = require("./empresa");
const util = require("util")


const gerenteSchema = new schema.Entity("gerente")
const encargadoSchema = new schema.Entity("encargado")
const empleadoSchema = new schema.Entity("empleado")

const empresaSchema = new schema.Entity("empresa",{
    gerente: gerenteSchema, 
    encargado: encargadoSchema, 
    empleado: [empleadoSchema]
});

const normalizeEmpresa = normalize(empresa, empresaSchema)

function print(objeto){
    console.log(util.inspect(objeto, false,12,true))
}

print(empresa);
print(normalizeEmpresa);

console.log("original: " + Object.keys(empresa).length);
console.log("normalizado: " + Object.keys(normalizeEmpresa).length);