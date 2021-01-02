console.log("This is A Export module");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

function prime(a, b) {

    let count = 0;
    let arr = [];

    for (let i = a; i < b; i++) {
        let c = 0;
        for (let j = 2; j < a; j++) {
            if (i % j == 0) {
                c++;
            }
        }
        if (c == 2) {
            arr[count] = i;
            count++;
        }
    }
    return arr;
}

module.exports = {
    avg: average,
    prime: prime
}