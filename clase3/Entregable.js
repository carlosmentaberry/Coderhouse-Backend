const fs = require('fs');

class Contenedor {
    constructor(nombre) {
        this.nombre = nombre;
    }

    save = async (Object) => {
        try {
            let array = await this.readAll();

            let id_asignado = getMaxId(array);
            console.log("ID ASIGNADO: " + id_asignado);

            array.push({ id: id_asignado, object: Object });

            let written = await this.write(JSON.stringify(array));
            if(written){
                console.log("Objeto agregado")
                console.log("**********");
                console.log(Object);
                console.log("**********");
            }else{
                console.log("Error escribiendo el archivo");
            }
        } catch (err) {
            console.log("Error obteniendo el archivo");
            console.log(err);
        }
    };

    readAll = async () => {
        try {
            console.log("OBTENIENDO TODOS LOS OBJETOS...");
            let content = await fs.promises.readFile(this.nombre, "utf-8");
            let array = getArrayFromJsonContent(content);
            
            return array;
        } catch (err) {
            console.log("Error obteniendo el archivo");
            console.log(err);
            return [];
        }
    };

    getRandom = async () => {
        let arr = await this.readAll();
        let r = Math.floor(Math.random() * (arr.length)) + 1;
        return arr.filter(prod => prod.id == r);
    }

    getById = async (id) => {
        console.log("OBTENIENDO OBJETO POR ID..." + id);
        let array = JSON.parse(await this.readAll()).filter(x => x.id == id);
        console.log("**********");
        console.log(JSON.stringify(array));
        console.log("**********");
        return array;
    };

    deleteById = async (id) => {
        console.log("BORRANDO OBJETO POR ID..." + id);
        let array = await this.readAll();
        const index = array.indexOf(array.filter(x => x.id == id)[0]);
        if (index > -1) {
            array.splice(index, 1);
        }
        let written = await this.write(JSON.stringify(array));
        if(written){
            console.log("Elemento borrado");
        }else{
            console.log("Elemento no borrado");
        }
    };

    deleteAll = async () => {
        console.log("BORRANDO TODOS LOS OBJETOS...");
        let written = await this.write("[]");
        if(written){
            console.log("Elementos borrados");
        }else{
            console.log("Elementos no borrados");
        }
    };

    write = async (content) =>{
        let result = true;
        await fs.promises.writeFile(this.nombre, content, error =>{
            if(error){
                result = false;
            }
        });
        return result;
    }

}
const getMaxId = (array) => {
    let id_asignado = array.length + 1;
    if (array.length == 0) {
        id_asignado = 1;
    }
    else {
        while (true) {
            if (!array.indexOf(id_asignado)) {
                id_asignado += 1;
            } else {
                break;
            }
        }
    }
    console.log("id_asignado: " + id_asignado);
    return id_asignado;
};

const showArray = (array) => {
    if (array.length > 0) {
        console.log("ARRAY:");
        console.log("**********");
        console.log(array);
        console.log("**********");
    } else {
        console.log("ARRAY VACIO:");
        console.log("**********");
        console.log(array);
        console.log("**********");
    }
};
const getArrayFromJsonContent = (content) => {
    let array = [];
    try {
        if (content.length > 0) {
            array = JSON.parse(content);
        }
    } catch (ex) {
        console.log("Error converting content to array")
        array = [];
    }
    return array;
};

let contenedor = new Contenedor("datafile.txt");

const initialize = async () => {
    // 1
    console.log("Ejercio 1");
    await contenedor.save({ nombre: "Carlos", apellido: "Mentaberry" });
    await contenedor.save({ nombre: "Juan", apellido: "Perez" });
    await contenedor.save({ nombre: "Diego", apellido: "Maradona" });
    await contenedor.save({ nombre: "Lionel", apellido: "Messi" });

    // 2
    console.log("Ejercio 2");
    showArray(await contenedor.readAll());

    // 3
    console.log("Ejercio 3");
    await contenedor.getById(3);

    // 4
    console.log("Ejercio 4");
    await contenedor.deleteById(4);
    showArray(await contenedor.readAll());

    // 5
    console.log("Ejercio 5");
    await contenedor.deleteAll();
}
initialize();


