import { Routes, Route } from 'react-router-dom';


import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import PageTitle from "./components/PageTitle/PageTitle";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PageNotFound from './components/PageNotFound/PageNotFound';



const App = () => {
  return (
    <div>
      <MainContainer>
        <NavBar />
        <PageTitle>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PageTitle>

      </MainContainer>

    </div>
  );
};

export default App;