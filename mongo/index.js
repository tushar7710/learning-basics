// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tusharcart', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("We r one")
});

var kittySchema = new mongoose.Schema({
    name: String
});


kittySchema.methods.speak = function() {
    var greeting = "My name is " + this.name
    console.log(greeting);
}


var Kitten = mongoose.model('tusharkitty', kittySchema);


var tusharkit = new Kitten({ name: 'tusharkit' });
var tusharkit2 = new Kitten({ name: 'tusharkit2' });
/* console.log(tusharkit.name); // 'Silence'
tusharkit.speak(); */

tusharkit.save(function(err, tusharkit) {
    if (err) return console.error(err);
    tusharkit.speak();
});

tusharkit2.save(function(err, k) {
    if (err) return console.error(err);
    k.speak();
});

Kitten.find({ name: "tusharkit2" }, function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})