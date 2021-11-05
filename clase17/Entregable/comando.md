use ecommerce
db.createCollection("mensajes")
db.createCollection("productos")

db.productos.insert([{nombre:"regla",precio:120},{nombre:"lapiz",precio:150},{nombre:"lapicera",precio:550},{nombre:"goma",precio:1550},{nombre:"color",precio:3150},{nombre:"fibra",precio:5150},{nombre:"sacapuntas",precio:4150},{nombre:"escuadra",precio:1000},{nombre:"transportador",precio:3050},{nombre:"compas",precio:2350}])

db.mensajes.insert([{nombre:"charly",mensaje:"Hola",fecha:ISODate()},{nombre:"carlos",mensaje:"Hola",fecha:ISODate()},{nombre:"Juan",mensaje:"Hola",fecha:ISODate()},{nombre:"Jose",mensaje:"Hola",fecha:ISODate()},{nombre:"Pepe",mensaje:"Hola",fecha:ISODate()},{nombre:"Pedro",mensaje:"Hola",fecha:ISODate()},{nombre:"Roque",mensaje:"Hola",fecha:ISODate()},{nombre:"Ricardo",mensaje:"Hola",fecha:ISODate()},{nombre:"Ariel",mensaje:"Hola",fecha:ISODate()},{nombre:"Arturo",mensaje:"Hola",fecha:ISODate()}])

db.productos.find().pretty()
db.mensajes.find().pretty()