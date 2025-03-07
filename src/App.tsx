import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from 'page/Home';
import styled from 'styled-components';
import Contents from 'page/Contents';
import AboutMe from 'page/AboutMe';
import background from './assets/image/background.png';
import Game from 'page/Game';
import CompanyProject from 'page/CompanyProject';
import ToyProject from 'page/ToyProject';
import Menu from 'components/Menu';
import Contact from 'page/Contact';
import { breakMobile, breakTablet } from 'assets/style/common';

const Wrap = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: url(${background}) no-repeat center/cover fixed;

  &.sub_page {
    padding: 8rem;

    @media (max-width: ${breakTablet}) {
      padding: 8rem 6rem;
    }
    @media (max-width: ${breakMobile}) {
      padding: 12rem 2rem;
    }
  }
`;

function App() {
  const { pathname } = useLocation();
  const notHome = pathname !== '/';
  return (
    <Wrap className={notHome && pathname !== '/game' ? 'sub_page' : ''}>
      <Menu notHome={notHome} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contents' element={<Contents />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/company-project' element={<CompanyProject />} />
        <Route path='/toy-project' element={<ToyProject />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </Wrap>
  );
}

export default App;
