var Stack = function () {
  this.count = 0;
  this.storage = {};

  // push method for adding a value
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // pop for removing
  this.pop = function () {
    if (this.count === 0) return undefined;

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // size
  this.size = function () {
    return this.count;
  };

  // peek to get the last element
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
