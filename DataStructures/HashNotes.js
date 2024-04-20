// Hash tables in JS are objects {}

// let user = {
//   name: 'John',
//   age: 25,
//   magic: true,
//   spell: function () {
//     console.log('abra kadabra');
//   },
// };

// user.age; // O(1)
// user.spell(); // O(1)
// user.location = 'Brazil'; // O(1)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key) {
    const address = this._hash(key);
    const current = this.data[address];
    if (current) {
      for (let i = 0; i < current.length; i++) {
        if (current[i][0] === key) {
          return current[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0]);
      }
    }
    return keyArray;
  }
  value(key) {
    const val = this._hash(key);
    return this.keys().indexOf(val);
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000);
myHashTable.get('grapes');
myHashTable.value();
