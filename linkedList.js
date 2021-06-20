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
