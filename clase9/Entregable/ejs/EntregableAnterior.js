const { O_NONBLOCK } = require('constants');
const fs = require('fs');

module.exports = class Contenedor {
    constructor(nombre) {
        this.nombre = nombre;
    }

    save = async (Object) => {
        try {
            console.log("filename: " + this.nombre);
            let array = JSON.parse(await this.readAll());

            let id_asignado = getMaxId(array);
            console.log("ID ASIGNADO: " + id_asignado);
            array.push({id: id_asignado, price: Object.price, title: Object.title, thumbnail: Object.thumbnail});

            let written = await this.write(JSON.stringify(array, null, 2));
            if(written){
                console.log("Objeto agregado")
                console.log("**********");
                console.log(Object);
                console.log("**********");
                return "Objeto agregado";
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
            let path = __dirname + "\\" + this.nombre;
            console.log(path);
            let content = await fs.promises.readFile(path, "utf-8");
            let array = getArrayFromJsonContent(content);
            return array;
        } catch (err) {
            console.log(err);
            console.log("Error obteniendo el archivo");
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
        console.log(JSON.stringify(array, null, 2));
        console.log("**********");
        return array.length <= 0 ? "No existe el objeto" : array;
    };

    updateById = async (id, object) => {
        console.log("OBTENIENDO OBJETO POR ID..." + id);
        let array = JSON.parse(await this.readAll());
        if(array.filter(x => x.id == id).length > 0){
            array.map(obj => {
                if(obj.id == id){
                    obj.price = object.price;
                    obj.title = object.title;
                    obj.thumbnail = object.thumbnail;
                }
            })
            this.write(JSON.stringify(array, null, 2));
            console.log("**********");
            console.log(JSON.stringify(array, null, 2));
            console.log("**********");
            return array.length <= 0 ? "No existe el objeto" : array;
        }else{
            return "No existe el objeto";
        }
    };

    deleteById = async (id) => {
        console.log("BORRANDO OBJETO POR ID..." + id);
        let array = JSON.parse(await this.readAll());
        const index = array.indexOf(array.filter(x => x.id == id)[0]);
        if (index > -1) {
            array.splice(index, 1);
            let written = await this.write(JSON.stringify(array, null, 2));
            if(written){
                console.log("Elemento borrado");
            }else{
                console.log("Elemento no borrado");
            }
        }else{
            return "No existe el objeto";
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
            array = content;
        }
    } catch (ex) {
        console.log("Error converting content to array")
        array = [];
    }
    return array;
};