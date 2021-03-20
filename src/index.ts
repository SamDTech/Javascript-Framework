import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({name: 'NAME', age: 20})

const userForm = new UserForm(document.querySelector('#root'), user)


userForm.render()