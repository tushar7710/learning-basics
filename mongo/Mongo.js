/* This is a Mongod commands*/

use tusharcart

db.items.insertOne({
    name: "Redmi note 9",
    price: 12345,
    rating: 4.8,
    qty: 45,
    sold: 4
})

db.items.insertMany([{
    name: "Realme 5 pro",
    price: 17000,
    rating: 5.0,
    qty: 50000,
    sold: 40000
}, {
    name: "Realme 6",
    price: 17500,
    rating: 4.8,
    qty: 5000,
    sold: 400
}, {
    name: "Realme 6",
    price: 17500,
    rating: 4.8,
    qty: 5000,
    sold: 400
}, {
    name: "Realme 6",
    price: 17500,
    rating: 4.0,
    qty: 5000,
    sold: 400,
    best: "yes"
}])