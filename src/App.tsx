import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from 'page/Home';
import styled from 'styled-components';

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <Wrap>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Wrap>
  );
}

export default App;
