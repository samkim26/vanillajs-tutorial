console.log('Im working');

let a = 221;
let b = a - 5;
a = 4; // variables with 'let' can be updated, with 'const' cannot be updated
console.log(b, a);

// 변수 선언할 때 const로

const what = 'Nicolas';
const wat = false; // false

// Array
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(daysOfWeek[2]);

// Object
const nicoInfo = {
  name: 'Nico',
  age: 33,
  gender: 'Male',
  isHandsome: true,
  favMovies: ['Along the gods', 'LOTR', 'Oldboy'],
  favFood: [
    {
      name: 'Kimchi',
      fatty: false
    },
    {
      name: 'Cheese burger',
      fatty: true
    }
  ]
};
console.log(nicoInfo);
