import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.querySelector('#root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
}
else{
  throw new Error('root Element not found!')
}