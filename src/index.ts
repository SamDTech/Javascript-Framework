import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 20 });

const root = document.querySelector('#root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit)
}
else{
  throw new Error('root Element not found!')
}