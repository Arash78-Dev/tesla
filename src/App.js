import './App.scss';
import Home from "./component/Home"
import styled from 'styled-components';
import Header from './component/Header';

function App() {
  return (
    <Container>
      <Header/>
      <Home/>
    </Container>
  );
}

export default App;


const Container = styled.div`
height:100vh;
`