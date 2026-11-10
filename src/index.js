function add(a, b) {
  return a + b;
}

function main() {
  console.log("Hello, World!");
  console.log(`2 + 3 = ${add(2, 3)}`);
}

if (require.main === module) {
  main();
}

module.exports = { add };