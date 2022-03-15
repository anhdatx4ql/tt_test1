import {checkString,returnStudent} from './lib/myLib.js'

let check = checkString('');

console.log(check);


let mapStudent = new Map();
mapStudent.set("username", "anh@gmail.com");
mapStudent.set("username1", "chi@gmail.com");
mapStudent.set("username2", "em@gmail.com");
mapStudent.set("username3", "co@gmail.com");
mapStudent.set("username4", "chu@gmail.com");

let searchStudent =  returnStudent("username",mapStudent);
console.log(searchStudent);

