import Header from "../Header/Header";
import CardsContainer from "../CardsContainer/CardsContainer";

import styles from './Container.module.scss';

const Container = () => {
    return (
        <div>
            <Header />
            <p className={styles.description}>Intresting things I want to check out!</p>
            <CardsContainer />
        </div>
    );
};

export default Container;