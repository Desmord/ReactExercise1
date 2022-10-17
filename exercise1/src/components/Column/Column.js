import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

import styles from './Column.module.scss';

const Column = ({ id, title, icon, cards, action }) => {

    return (
        <article className={styles.column}>
            <span className={`${styles.icon} fa fa-${icon}`}></span>
            <h3 className={styles.title}> {title}</h3>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title}></Card>)}
            </ul>
            <CardForm columnId={id} action={action} />
        </article>
    );
};

export default Column;