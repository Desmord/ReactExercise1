import Column from '../Column/Column';

import styles from './CardsContainer.module.scss';

const CardsContainer = () => {
    return (
        <div className={styles.columns}>
            <Column title="Books" icon="book"/>
            <Column title="Movies" icon="gamepad"/>
            <Column title="Games" icon="film"/>
        </div>
    );
};

export default CardsContainer;