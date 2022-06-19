import styles from './NotFound.module.scss';
import img from './../../assets/img/notfound.jpg';

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className={styles.flex}>
          <img src={img} alt="Not found" className={styles.img} />
          <h1 className={styles.title}>Page not found ;(</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
