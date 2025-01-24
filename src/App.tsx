import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from 'page/Home';
import styled from 'styled-components';
import Contents from 'page/Contents';
import AboutMe from 'page/AboutMe';
import background from './assets/image/background.png';
import Game from 'page/Game';
import CompanyProject from 'page/CompanyProject';

const Wrap = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${background}) no-repeat center/cover fixed;

  &.sub_page {
    padding: 8rem;
  }
`;

function App() {
  const { pathname } = useLocation();

  return (
    <Wrap className={pathname !== '/' ? 'sub_page' : ''}>
      <Routes>
        <Route path='/' element={<Game />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contents' element={<Contents />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/company-project' element={<CompanyProject />} />
      </Routes>
    </Wrap>
  );
}

export default App;
