function sum(a, b) {
  if (typeof a == "number" && typeof b == "number"){
      return a + b;
  } else {
      throw new TypeError("Аргументы не являются числами");
  }
}

module.exports = sum;
