import Link from 'next/link';
import './post-details.css';
import apiURLs from '@/app/api/urls';

const PostDetails = async (props) => {
  let params = await props.params;
  let postId = params.postId;

  let response = await fetch(`${apiURLs.getPosts}/${postId}`);
  let postDetails = await response.json();

  let userDetailsResponse = await fetch(
    `${apiURLs.getUsers}/${postDetails.userId}`
  );
  let userDetails = await userDetailsResponse.json();

  return (
    <div className='container'>
      <h1>
        <Link href={'/'}>Home</Link> / <Link href={'/posts'}>Posts</Link> /
        Posts Details
      </h1>
      <div className='post-details'>
        <h2 className='title'>{postDetails.title}</h2>
        <p>{postDetails.body}</p>
        <p className='username'>
          {' '}
          -{' '}
          <Link href={`/users/${postDetails.userId}`}>{userDetails.name}</Link>
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
