import { FETCH_USERS } from './types';

export function fetchUsers(){
  return {
    type:FETCH_USERS,
    payload:[
      {name: 'Jim'},
      {name: 'Tito'},
      {name: 'Pepe'}
    ]
  };
}
