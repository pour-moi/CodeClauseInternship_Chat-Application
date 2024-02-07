import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledUserName = styled.div``;

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
      <StyledUserName>
        <form onSubmit={enterChat}>
          <input
            type="text"
            placeholder="UserName"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <button type="submit">Enter</button>
        </form>
      </StyledUserName>
    </>
  );
}
