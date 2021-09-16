const fs = require('fs');

let array = [];

class Contenedor {
    constructor(nombre){
        this.nombre = nombre;
    }

    save(Object){
        console.log("OBTENIENDO TODOS LOS OBJETOS...");
        let content = fs.readFileSync(this.nombre, "utf-8");
        
        array = getArrayFromJsonContent(content);
        
        let id_asignado = getMaxId(array);

        array.push({id: id_asignado, object: Object});

        fs.writeFileSync(this.nombre, JSON.stringify(array));

        console.log("GRABANDO OBJETO...");
        console.log("**********");
        console.log(Object);
        console.log("ID ASIGNADO: " + id_asignado);
        console.log("**********");
        showArray(array);
        return id_asignado;
    };

    getAll(){
        console.log("OBTENIENDO TODOS LOS OBJETOS...");
        array = JSON.parse(fs.readFileSync(this.nombre, "utf-8"));
        showArray(array);
    };

    getById(id){
        console.log("OBTENIENDO OBJETO POR ID..." + id);
        array = JSON.parse(fs.readFileSync(this.nombre, "utf-8")).filter(x => x.id == id);
        console.log("**********");
        console.log(array);
        console.log("**********");
    };

    deleteById(id){
        console.log("BORRANDO OBJETO POR ID..." + id);
        array = JSON.parse(fs.readFileSync(this.nombre, "utf-8")).filter(x => x.id == id);
        const index = array.indexOf(id);
        if (index > -1) {
            array.splice(index, 1);
        }
        fs.writeFileSync(this.nombre, JSON.stringify(array), "utf-8");
    };

    deleteAll(){
        console.log("BORRANDO TODOS LOS OBJETOS...");
        for(let i = 0; i<= array.length; i++){
            array.pop();
        }

        fs.writeFileSync(this.nombre, JSON.stringify(array), "utf-8");
        
        array = fs.readFileSync(this.nombre, "utf-8");
        console.log("Array vacío");
        console.log(array);
    };

}
const getMaxId = (array) => {
    let id_asignado = array.length + 1;
    while(true){
        if(!array.filter(x => x.id == id_asignado)){
            id_asignado = array.length + 1;
        }else{
            break;
        }
    }
    return id_asignado;
};
const showArray = (array) => {
    console.log("ARRAY:");
    console.log("**********");
    console.log(array);
    console.log("**********");
};
const getArrayFromJsonContent = (content) => {
    try 
    {
        if(content.length <= 0){
            array = [];
        }else{
            array = JSON.parse(content);
        }
    }catch (ex){
        array = [];
    }
    return array;
};

let contenedor = new Contenedor("datafile.txt");
// 1
console.log("Ejercio 1");
contenedor.save({ nombre: "Carlos", apellido: "Mentaberry" });
contenedor.save({ nombre: "Juan", apellido: "Perez" });
contenedor.save({ nombre: "Diego", apellido: "Maradona" });
contenedor.save({ nombre: "Lionel", apellido: "Messi" });

// 2
console.log("Ejercio 2");
contenedor.getAll();

// 3
console.log("Ejercio 3");
contenedor.getById(3);

// 4
console.log("Ejercio 4");
contenedor.deleteById(4);

// 5
console.log("Ejercio 5");
contenedor.deleteAll();
