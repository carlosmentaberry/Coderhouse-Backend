use ecommerce
db.createCollection("mensajes")
db.createCollection("productos")

1, 2)
db.productos.insert([{nombre:"regla",precio:120},{nombre:"lapiz",precio:150},{nombre:"lapicera",precio:550},{nombre:"goma",precio:1550},{nombre:"color",precio:3150},{nombre:"fibra",precio:5150},{nombre:"sacapuntas",precio:4150},{nombre:"escuadra",precio:1000},{nombre:"transportador",precio:3050},{nombre:"compas",precio:2350}])

db.mensajes.insert([{nombre:"charly",mensaje:"Hola",fecha:ISODate()},{nombre:"carlos",mensaje:"Hola",fecha:ISODate()},{nombre:"Juan",mensaje:"Hola",fecha:ISODate()},{nombre:"Jose",mensaje:"Hola",fecha:ISODate()},{nombre:"Pepe",mensaje:"Hola",fecha:ISODate()},{nombre:"Pedro",mensaje:"Hola",fecha:ISODate()},{nombre:"Roque",mensaje:"Hola",fecha:ISODate()},{nombre:"Ricardo",mensaje:"Hola",fecha:ISODate()},{nombre:"Ariel",mensaje:"Hola",fecha:ISODate()},{nombre:"Arturo",mensaje:"Hola",fecha:ISODate()}])

3)
db.productos.find().pretty()
db.mensajes.find().pretty()

4)
db.productos.count()
db.mensajes.count()

5) a)
db.productos.insert([{nombre:"tijera",precio:2220}])

5) b)
db.productos.find({nombre:"tijera"})

5) b) i)
db.productos.find({precio:{$lt:1000}})

5) b) ii)
db.productos.find({$and:[{precio:{$gte:1000}}, {precio:{$lte:3000}}]})

5) b) iii)
db.productos.find({precio:{$gt:3000}})

5) b) iv)
db.productos.find().sort({precio:1}).limit(3).skip(2).limit(1)

5) c)
db.productos.updateMany({precio:{$gt:4000}},{$set:{"stock":0}})

5) d)
db.productos.deleteMany({precio:{$lt:1000}})

6)
db.createUser({user:"pepe", pwd:"asd456", roles:[{role:"read", db:"ecommerce"}]})