import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store'
import { useEffect } from 'react';

import Card from '../Card/Card';

import styles from './Favorite.module.scss';

const Favorite = () => {

    const favoriteCards = useSelector(({ cards }) => getFavoriteCards(cards))

    // useEffect(() => {
    //     console.log(favoriteCards)
    // }, [favoriteCards])

    return (
        <div className={styles.container}>


            {favoriteCards.length === 0 ?
                <div> No Cards</div> :
                <article className={styles.column}>
                    <ul className={styles.cards}>
                        {favoriteCards.map(card =>
                            <Card
                                key={card.id}
                                cardId={card.id}
                                isFavorite={card.isFavorite}
                                title={card.title}>
                            </Card>)}
                    </ul>
                </article>}

        </div>
    );
};

export default Favorite;