import { Header } from "./componenets/header";
import { RoomList } from "./componenets/roomList";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const StyledHeader = styled.h2`
  color: white;
  font-family: "Helvetica";
  margin-left: 0.5em;
`;

const GlobalStyle = createGlobalStyle`
body{
  background-color:rgba(90,149,253,255);
  margin:0;
}
@font-face {
  font-family: 'Helvetica';
  src: url('../fonts/HelveticaNeueLTStd-Roman.otf') format('opentype');
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <Header />
      </StyledHeader>
      <RoomList />
    </>
  );
}

export default App;
