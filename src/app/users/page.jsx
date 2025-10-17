import React from 'react';
import './users.css';
import apiURLs from '../api/urls';
import Link from 'next/link';

const Users = async () => {
  let response = await fetch(apiURLs.getUsers);

  let users = await response.json();

  return (
    <div className='container'>
      <h1>
        <Link href={'/'}>Home</Link> / Users List
      </h1>
      <div className='users-list'>
        {users.map((user) => {
          return (
            <div className='item' key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.company.name}</p>
              <p>
                <Link className='view-user' href={`/users/${user.id}`}>
                  View User
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
