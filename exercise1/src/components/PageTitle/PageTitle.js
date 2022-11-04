import styles from './PageTitle.module.scss';

const PageTitle = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default PageTitle;