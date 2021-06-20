function Queue() {
  var collection = [];
  // print to get it printed
  this.print = function () {
    return collection;
  };
  // enqueue to push element
  this.enqueue = function (element) {
    return collection.push(element);
  };
  // dequeue to remove element from the collection
  this.dequeue = function () {
    return collection.shift();
  };
  // front to get the first element
  this.front = function () {
    return collection[0];
  };
  // size
  this.size = function () {
    return collection.size;
  };
  // check if it is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
console.log(q.print());
q.dequeue();
console.log(q.front());
console.log(q.print())
