Array.prototype.last = function() {
    return this[this.length - 1];
};

console.log([1, 2, 3].last()); //3
console.log(["a", "b", "c"].last());  //"c"
console.log([].last()); // undefined