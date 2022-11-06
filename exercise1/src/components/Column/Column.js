import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

import styles from './Column.module.scss';

const Column = ({ id, title, icon, action }) => {

    const cards = useSelector(state => getFilteredCards(state, id));

    return (
        <article className={styles.column}>
            <span className={`${styles.icon} fa fa-${icon}`}></span>
            <h3 className={styles.title}> {title}</h3>
            <ul className={styles.cards}>
                {cards.map(card =>
                    <Card
                        key={card.id}
                        cardId={card.id}
                        isFavorite={card.isFavorite}
                        title={card.title}>
                    </Card>)}
            </ul>
            <CardForm columnId={id} />
        </article>
    );
};

export default Column;