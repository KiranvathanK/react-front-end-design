import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [{id: 'u1' , name: 'max' , image:'https://images.unsplash.com/photo-1512505069313-c830f5a9643f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',places:3}];

    return <UsersList  items={USERS} />;
};


export default Users;