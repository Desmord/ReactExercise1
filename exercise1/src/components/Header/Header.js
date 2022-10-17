import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Things to do <span>soon!</span></div>
        </div>
    );
};

export default Header;