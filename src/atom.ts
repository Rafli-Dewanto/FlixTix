import { atom, PrimitiveAtom } from 'jotai';
import IUser from '@/utils/types/user';

export const userAtom: PrimitiveAtom<IUser> = atom({
  email: 'john@email.com',
  password: 'password',
  username: 'John',
  fullname: 'John Doe',
  age: 12,
  balance: 500000,
});
