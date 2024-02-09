import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Helvetica';
  src: url('/chat-app/fonts/HelveticaNeueLTStd-Roman.otf') format('truetype');
}
`;

const StyledUserName = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
  input,
  button {
    width: 11em;
    height: 2em;
    border-radius: 0.5em;
  }
  input {
    background-color: whitesmoke;
    border: 1px solid black;
  }
`;

const StyledButton = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  button {
    margin-top: 1em;
    background-color: black;
    color: white;
    border-style: none;
  }
`;

export function UserName() {
  const [username, setUsername] = useState("");
  const history = useNavigate();

  const enterChat = (event) => {
    event.preventDefault();
    if (username.trim() !== "") {
      sessionStorage.setItem("username", username);
      history("/App");
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledUserName>
        <h1>Welcome</h1>
        <form onSubmit={enterChat}>
          <input
            type="text"
            placeholder="UserName"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <StyledButton>
            <button type="submit">Enter</button>
          </StyledButton>
        </form>
      </StyledUserName>
    </>
  );
}
