import { atom, PrimitiveAtom } from 'jotai';
import IUser from '@/utils/types/user';
import { ITransaction } from './utils/types/transaction';

export const userAtom: PrimitiveAtom<IUser> = atom({
  email: 'john@email.com',
  password: 'password',
  username: 'John',
  fullname: 'John Doe',
  age: 12,
  balance: 500000,
});

export const purchaseSuccessAtom: PrimitiveAtom<boolean> = atom(false);

export const transactionAtom: PrimitiveAtom<ITransaction[]> = atom<ITransaction[]>([
  {
    id: 1,
    movieName: 'John Wick 4',
    tickets: 3,
    price: 50000,
    total: 150000,
  },
  {
    id: 2,
    movieName: 'Oppenheimer',
    tickets: 2,
    price: 50000,
    total: 150000,
  },
]);
