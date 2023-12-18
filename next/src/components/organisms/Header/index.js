'use client'
import styles from './styles.module.scss';

const Header = () => {
  return (
    <>
      <a href="#main" className={styles.skipToMainContent}>Przejdź do głównej treści</a>
      <header className={styles.wrapper}>
        <div className="max-width">

        </div>
      </header>
      <div
        className={styles.overlay}
        aria-hidden="true"
        onClick={() => setNavOpened(false)}
      />
    </>
  );
};

export default Header;