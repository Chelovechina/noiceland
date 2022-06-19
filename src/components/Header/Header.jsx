import styles from './Header.module.scss';
import logo from './../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
