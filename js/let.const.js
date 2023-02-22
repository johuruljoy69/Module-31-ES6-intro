// Let: let it to reassign
// const: do not allow it to reassign
let money = 25;
 money = 35;
 console.log(money);
 
 const bird = 'pakhi';
 // not allow
 bird = 'mona pakhi';
// but allow
const message = bird + 'gun guna gun'
 console.log(message);

 const numbers = [12, 13, 13]
//  reassign is not allow
numbers = [71, 66, 78, 22, 99]
// but allow
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'jahin'
    address: 'jashore'
}
// not allow
student = {name: 'arabi'}
// but allow
student.name = 'arabi';

let sum = 0;
for (let i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum = sum + number;
}