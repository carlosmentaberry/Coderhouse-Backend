const {normalize, schema} = require("normalizr");
const obj = require("./normal");
const util = require("util")


const authorSchema = new schema.Entity("author");
const commentSchema = new schema.Entity("comment", {
    comments: authorSchema
})

const postSchema = new schema.Entity("post",{
    author: authorSchema,
    comments: [commentSchema]
});

const normalizePost = normalize(obj, postSchema)

function print(objeto){
    console.log(util.inspect(objeto, false,12,true))
}

print(obj);
print(normalizePost);

console.log("original: " + Object.keys(obj).length);
console.log("normalizado: " + Object.keys(normalizePost).length);