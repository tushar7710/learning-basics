/* This is a Mongod commands*/

use tusharcart

db.anotherCollection.insertOne({ a: 545 })

db.items.find({ rating: 4.0, sold: 400 })

db.items.find({ rating: { $gt: 4.8 } })

/* And operation */
db.items.find({ rating: { $gt: 4.0 }, sold: { $gte: 400 } })

/* Or Operation */
db.items.find({ $or: [{ rating: { $gt: 4.0 } }, { sold: { $gte: 400 } }] })

/* Deleteing operation */
db.items.delteOne({ price: 17500 })

db.items.delteMany({ price: 17500 })

db.items.updateOne({ name: "Realme 6" }, { $set: { price: 16000 } })
db.items.updateMany({ name: "Realme 6" }, { $set: { price: 16000, rating: 4.3 } })