import './posts.css';
import Link from 'next/link';
import apiURLs from '../api/urls';

const Posts = async () => {
  let response = await fetch(apiURLs.getPosts);
  let posts = await response.json();
  return (
    <div>
      <div className='container'>
        <h1>
          <Link href={'/'}>Home</Link> / Posts List
        </h1>
        <div className='posts-list'>
          {posts.map((post) => {
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
    </div>
  );
};

export default Posts;
