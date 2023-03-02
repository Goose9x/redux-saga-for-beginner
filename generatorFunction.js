function* married() {
  console.log("Yeu lan 1");
  yield "that tinh lan 1";
  return "oke";
  console.log("Yeu lan 2");
  yield "that tinh lan 2";
  console.log("Yeu lan 3");
  yield "Cuoi'";
}
let personMarried = married();
// node generatorFunction.js
console.log(personMarried.next());
console.log(personMarried.next());
