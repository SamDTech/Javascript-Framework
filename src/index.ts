import { Collection } from './models/Collection';
import { User } from './models/User';

const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => console.log(collection));

collection.fetch();
