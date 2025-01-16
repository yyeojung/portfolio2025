import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from 'page/Home';
import styled from 'styled-components';
import Contents from 'page/Contents';
import background from './assets/image/background.png';
import Game from 'page/Game';

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${background}) no-repeat center/cover fixed;

  &.sub_page {
    padding: 8rem 14rem;
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
      </Routes>
    </Wrap>
  );
}

export default App;
