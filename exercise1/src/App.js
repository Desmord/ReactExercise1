import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import Container from "./components/Container/Container";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <MainContainer>
        <NavBar />
        {/* dodac kontener na Main site i inne podstrony - Zrobic jakis jeden komponent i przekazywac childern dla niego w przypadku pod stron*/}
        <Hero />
        <SearchForm />
        <Container />
      </MainContainer>

    </div>
  );
};

export default App;