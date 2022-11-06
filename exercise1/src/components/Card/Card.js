import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

import styles from './Card.module.scss';

const Card = ({ cardId, isFavorite, title }) => {

    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(cardId));
    }

    const handleDeleteFavorite = () => {
        // console.log(`usuwanie`)
        dispatch(removeCard(cardId));
    }

    return (
        <li className={styles.card}>
            {title}
            <div>
                <span
                    onClick={() => handleToggleFavorite()}
                    className={`fa fa-star-o ${clsx(isFavorite && styles.favorite, !isFavorite && styles.notFavorite)}`} />
                <span
                    onClick={() => handleDeleteFavorite()}
                    className={`fa fa-trash `} />
            </div>
        </li>
    );
};

export default Card;