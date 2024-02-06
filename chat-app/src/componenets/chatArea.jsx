import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTextArea = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 0.5em;
  input {
    width: 20em;
  }
`;

export function ChatPlace() {
  return (
    <>
      <button>
        <Link to="/">Back</Link>
      </button>
      <StyledTextArea>
        <input type="text" placeholder="Message" />
        <button>Send</button>
      </StyledTextArea>
    </>
  );
}
