import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addCard } from '../../redux/cardsRedux';

import styles from './CardForm.module.scss';

import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = (props) => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title: title, columnId: props.columnId }));
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;

