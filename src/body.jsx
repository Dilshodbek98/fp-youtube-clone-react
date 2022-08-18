import { Header } from './components/header';
import { Main } from './components/main';
import { BodyBox } from './components/styled-components/body-styled';

function Body() {
  return (
    <BodyBox>
      <Header/>
      <Main />
    </BodyBox>
  );
}

export default Body;
