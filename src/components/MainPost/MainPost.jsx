import { useSelector } from 'react-redux';

import { getUserSelector } from '../../redux/slices/usersSlice';
import styles from './MainPost.module.scss';

const MainPost = ({ userId, title, body }) => {
  const user = useSelector(getUserSelector(userId));

  return (
    <div className={styles.post}>
      <div className={styles.left}>
        <div className={styles.img}></div>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>{title.toUpperCase()}</h3>
        <p className={styles.text}>{body}</p>
        <p className={styles.author}>BY {user.name.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default MainPost;
