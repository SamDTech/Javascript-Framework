import { User } from './models/User';

const user = new User({ name: 'new record', age: 40 });

user.events.on('change', () => {
  console.log('new change');
});

user.set({ name: 'new Name' });
