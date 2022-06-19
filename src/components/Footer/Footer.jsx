import whiteLogo from './../../assets/img/whitelogo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <img src={whiteLogo} alt="logo" className={styles.logo} />
          <p className={styles.copyright}>© 2018 Noiceland™, all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
