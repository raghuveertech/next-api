import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
      <ul>
        <li>
          {' '}
          <Link href={'/posts'}>Posts</Link>
        </li>
        <li>
          {' '}
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </div>
  );
}
