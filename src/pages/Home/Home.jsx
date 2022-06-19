import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, getPostsSelector } from '../../redux/slices/postsSlice';

import { fetchUsers } from '../../redux/slices/usersSlice';
import PostItem from '../../components/PostItem/PostItem';
import MainPost from '../../components/MainPost/MainPost';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, limit, currentPage } = useSelector(getPostsSelector);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPosts({ limit, currentPage }));
  }, [dispatch, limit, currentPage]);

  if ((posts.length === 0) | (users.length === 0)) {
    return <h1>Loading...</h1>;
  }

  const postList = posts.map((post) => <PostItem key={post.id} {...post} />);

  return (
    <div className="wrapper">
      <div className="container">
        <MainPost {...posts[0]} />
        <div className={styles.grid}>{postList}</div>
        <Pagination dispatch={dispatch} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;
