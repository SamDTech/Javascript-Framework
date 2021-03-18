import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = `https://localhost:3000/users`;

export class User {
  public events: Eventing = new Eventing();

  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  public attrs: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attrs = new Attributes<UserProps>(attrs);
  }
}
