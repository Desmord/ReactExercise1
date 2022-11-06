import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store.js';

import styles from './Card.module.scss';

const Card = ({ cardId, isFavorite, title }) => {

    const dispatch = useDispatch();

    const handleFavoriteClick = () => {
        dispatch(toggleFavorite(cardId));
    }

    return (
        <li className={styles.card}>
            {title}
            <span
                onClick={() => handleFavoriteClick()}
                className={`fa fa-star-o ${clsx(isFavorite && styles.favorite, !isFavorite && styles.notFavorite)}`} />
        </li>
    );
};

export default Card;