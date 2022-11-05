import Header from '../Header/Header'
import List from "../../List/List";

import styles from './Container.module.scss';

const Container = () => {
    return (
        <div>
            <Header />
            <p className={styles.description}>Intresting things I want to check out!</p>
            <List />
        </div>
    );
};

export default Container;