const { normalize, denormalize, schema } = require("normalizr");
const originalData = require("./data");
const util = require("util");


const users = new schema.Entity("author")
const commentsSchema = new schema.Entity("comments", {
    commenter: users
})
const articleSchema = new schema.Entity("articles", {
    user: users,
    comments: [commentsSchema]
})

const postsSchema = new schema.Entity("posts", {
    posts: [articleSchema]
});

//normalizar
const normalizedData = normalize(originalData, postsSchema)

//desnormalizar
const unnormalizedData = denormalize(normalizedData.result, postsSchema, normalizedData.entities)

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true))
}

//print(originalData);
//print(normalizedData);
print(unnormalizedData);

console.log("original: " + Object.keys(originalData).length);
console.log("normalizado: " + Object.keys(normalizedData).length);