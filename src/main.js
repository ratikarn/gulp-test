import { User,Register } from './section62';

let u = new User();
u.addUser(['module','module@gmail.com']);
console.log(u.showUser()); 

Register.save();
