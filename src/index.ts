import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserForm } from './views/UserForm';


const userForm = new UserForm(document.querySelector('#root'))


userForm.render()