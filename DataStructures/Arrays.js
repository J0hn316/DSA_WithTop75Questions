//const strings = ['a', 'b', 'c', 'd'];

//strings.push('e'); // O(1) - constant time complexity, because the array length doesn't change

//strings.pop(); // O(1) - constant time complexity

//strings.unshift('x'); // O(n) - linear time complexity, as it needs to shift all elements one place towards the right

//strings.splice(2, 0, 'j'); // O(n)  - linear time complexity

// Implementing an Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
