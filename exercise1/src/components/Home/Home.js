import Container from './Container/Container';
import Hero from './Hero/Hero';
import SearchForm from './SearchForm/SearchForm';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <Hero />
            <SearchForm />
            <Container />
        </div>
    );
};

export default Home;