const items = [
  { name: "chika", age: 20 },
  { name: "Zainab", age: 20 },
  { name: "Paschal", age: 0.23 },
  { name: "Paul", age: 22 },
  { name: "Ibrahim", age: 21 },
];

const newItems = items.map((item) => {
  return { ...item, age: 23 };
});

console.log(newItems);
console.log(items);
