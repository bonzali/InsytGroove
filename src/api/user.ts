import axios from 'axios';
import { User } from 'definitions/user';

export async function getUserList() {
  return axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
}


export function registerUser(user: User) {
  return axios.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(user),
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
}