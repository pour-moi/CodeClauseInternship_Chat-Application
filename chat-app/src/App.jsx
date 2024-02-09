import { Header } from "./componenets/header";
import { RoomList } from "./componenets/roomList";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const StyledHeader = styled.h4`
  color: white;
`;

const GlobalStyle = createGlobalStyle`
body{
  background-color:rgba(90,149,253,255);
  margin:0;
}
@font-face {
  font-family: 'Helvetica';
  src: url('/chat-app/fonts/HelveticaNeueLTStd-Roman.otf') format('truetype');
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
