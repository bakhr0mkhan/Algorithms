class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // create a new element to the end of the list
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
  //   add a new element to the beginning of the list
  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }
  //   delete method to remove element from list
  delete(value) {
    //   no head means list is empty
    if (!this.head) return null;
    // removing the first element from
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        //  moving on to the next node if not found
        currentNode = currentNode.next;
      }
    }
    while (this.tail.value === value) {
      this.tail = currentNode;
    }
  }
  //   find to get a specific element in the list
  find(value) {
    if (!this.head) return null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }
  //   insert after to create a new element after a specific element
  insertAfter(value, afterValue) {
    let existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value, next: afterValue.next };
      existingNode.next = newNode;
    }
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
    return elements;
  }
}

const firstList = new linkedList();

firstList.append(11);
firstList.append(11);
firstList.append(12);
firstList.append(13);
firstList.append(14);
firstList.append(14);
firstList.prepend(1);
firstList.prepend(1);

console.log(firstList.toArray());

firstList.delete(1);
firstList.delete(11);
firstList.delete(14);

console.log(firstList.toArray());

console.log(firstList.find(12));
console.log(firstList.find(13));
console.log(firstList.find(14));

console.log(firstList.insertAfter(17, 13));
console.log(firstList.insertAfter("new value", 17));
console.log(firstList.insertAfter("new 2", "new value"));
console.log(firstList.toArray());
