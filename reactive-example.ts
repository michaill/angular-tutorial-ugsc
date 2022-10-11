let ra = 1;
let rb = 2;
let rc = () => ra + rb;
console.log('a', ra, 'b', rb, 'c', rc());
ra = 3;
rb = 4;
console.log('a and b modified');
console.log('a', ra, 'b', rb, 'c', rc());

//toto je zmena z branche feature/alzatest