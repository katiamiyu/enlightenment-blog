const people = [{name: 'ade', age: 8},{name: 'ant', age: 9}, {name: 'ahmed', age: 7}];

const person = people.find(p=>p.age==7);
console.log(person);
const pabv7 = people.filter(p=>p.age>7);
console.log(pabv7);

const pmap = people.map((p) => {return {name: p.name, age: p.age, tage: p.age * 2}});

console.log(pmap);
