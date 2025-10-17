import React from 'react';
import './user-details.css';
import Link from 'next/link';
import apiURLs from '@/app/api/urls';

const UserDetails = async (props) => {
  let params = await props.params;
  let userId = params.userId;

  let usersResponse = await fetch(`${apiURLs.getUsers}/${userId}`);
  let userInfo = await usersResponse.json();

  let postsResponse = await fetch(apiURLs.getPosts);
  let postsList = await postsResponse.json();

  let userPosts = postsList.filter((post) => {
    return Number(post.userId) === Number(userId);
  });

  return (
    <div className='container'>
      <h1>
        <Link href={'/'}> Home </Link> / <Link href={'/users'}> Users </Link> /
        User Details
      </h1>
      <div className='user-details'>
        <h2>{userInfo.name}</h2>
        <p>Email: {userInfo.email}</p>
        <p>
          Address: {userInfo.address.street}, {userInfo.address.city},{' '}
          {userInfo.address.zipcode}
        </p>
      </div>
      <div className='posts-list'>
        {userPosts.map((post) => {
          return (
            <div className='item' key={post.id}>
              <h3>{post.title}</h3>
              <p>
                <Link className='learn-more' href={`/posts/${post.id}`}>
                  Learn More
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDetails;
