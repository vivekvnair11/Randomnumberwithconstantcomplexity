var RandomNumber = function () {
  this.arr = [];
  this.map = new Map(); 
};

RandomNumber.prototype.insert = function (val) {
  this.arr.push(val);
  if (!this.map.has(val)) {
    this.map.set(val, new Set());
    this.map.get(val).add(this.arr.length - 1);
    return true;
  } else {
    this.map.get(val).add(this.arr.length - 1);
    return false;
  }
};

RandomNumber.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }


  var indexes = Array.from(this.map.get(val));
  var idx = indexes[0];
  var n = this.arr.length;
  var last = this.arr[n - 1];

  [this.arr[idx], this.arr[n - 1]] = [this.arr[n - 1], this.arr[idx]];


  this.arr.pop();
  this.map.get(val).delete(idx);
  if (idx !== n - 1) {

    this.map.get(last).delete(n - 1);
    this.map.get(last).add(idx);
  }
  if (this.map.get(val).size === 0) {
    this.map.delete(val);
  }

  return true;
};

RandomNumber.getRandom = function () {
  var n = this.arr.length;
  var idx = Math.floor(Math.random() * n);
  return this.arr[idx];
};












