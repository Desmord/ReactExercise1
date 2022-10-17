import styles from './Column.module.scss';

const Column = ({ title, icon }) => {
    return (
        <article className={styles.column}>
            <span className={`${styles.icon} fa fa-${icon}`}></span>
            <h3 className={styles.title}> {title}</h3>
        </article>
    );
};

export default Column;