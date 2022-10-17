import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import Container from "./components/Container/Container";
import MainContainer from "./components/MainContainer/MainContainer";

const App = () => {
  return (
    <div>
      <MainContainer>
        <Hero />
        <SearchForm />
        <Container />
      </MainContainer>

    </div>
  );
};

export default App;