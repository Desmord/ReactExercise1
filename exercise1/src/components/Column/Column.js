import { useSelector } from 'react-redux';

import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

import styles from './Column.module.scss';

const Column = ({ id, title, icon, action }) => {


    const cards = useSelector(state => state.cards
        .filter(card => card.columnId === id)
        .filter(card => {
            if (state.searchString === ``) {
                return true
            } else {
                if (card.title.toLowerCase().includes(state.searchString.searchString.toLowerCase())) {
                    return true
                } else {
                    return false
                }
            }
        }));

    return (
        <article className={styles.column}>
            <span className={`${styles.icon} fa fa-${icon}`}></span>
            <h3 className={styles.title}> {title}</h3>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title}></Card>)}
            </ul>
            <CardForm columnId={id} />
        </article>
    );
};

export default Column;