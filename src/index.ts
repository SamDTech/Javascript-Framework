import { User } from './models/User';

const user = new User({ name: 'sam', age: 20 });

console.log(user.get('name'));
