import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../../redux/store';

import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
    const [searchText, setSearchText] = useState(``);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString({ searchString: searchText }));
        // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: { searchString: searchText } });
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <Button> <span className="fa fa-search" /></Button>
        </form>
    );
};

export default SearchForm;