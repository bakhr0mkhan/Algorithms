class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // create a new element
  append(value) {
    const newNode = { value: value, next: null };
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }
  // to return all values
  toArray() {
    let elements = [];
    if (!this.head) return null;
    let currentNode = this.head;
    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements
  }
}

const firstList = new linkedList();

firstList.append(1);
firstList.append(12);
firstList.append(13);
firstList.append(14);

console.log(firstList.toArray());
