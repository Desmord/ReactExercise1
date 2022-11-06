import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../../redux/searchStringRedux';

import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
    const [searchText, setSearchText] = useState(``);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString({ searchString: searchText }));
    }

    useEffect(() => {
        dispatch(updateSearchString({ searchString: `` }));
        // eslint-disable-next-line
    }, [])

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <Button> <span className="fa fa-search" /></Button>
        </form>
    );
};

export default SearchForm;