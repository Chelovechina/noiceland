import { useSelector } from 'react-redux';
import { getUserSelector } from '../../redux/slices/usersSlice';

import styles from './PostItem.module.scss';

const Post = ({ userId, title }) => {
  const user = useSelector(getUserSelector(userId));

  return (
    <div className={styles.post}>
      <div className={styles.img}></div>
      <h3 className={styles.title}>{title.toUpperCase()}</h3>
      <p className={styles.author}>BY {user.name.toUpperCase()}</p>
    </div>
  );
};

export default Post;
