import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBackground = styled.div`
  background-color: white;
  height: 100vh;
  border-radius: 2.7em 2.7em 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const UserChoice = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.3em;
  background-color: rgba(220, 232, 254, 255);
  height: 3em;
  width: 17em;
  margin-top: 1em;
  border-radius: 2em;
  button {
    border-style: none;
    background-color: rgba(220, 232, 254, 255);
  }
`;

const StyleList = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 80vw;
    font-weight: bold;
    padding: 0;
  }
  li::before {
    content: "";
    background: url("https://img.buzzfeed.com/buzzfeed-static/complex/images/wqyrge7d1m3ntcegpute/memoji-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto")
      no-repeat center/contain;
    display: inline-block;
    width: 3em;
    height: 5em;
    margin-right: 1em;
    vertical-align: middle;
  }
`;

const AddNewRoom = styled.div`
  background-color: rgba(67, 131, 252, 255);
  border-radius: 2em;
  width: 7em;
  padding: 0.2em;
  position: absolute;
  right: 0;
  bottom: 0;
`;

function CreateNewRoom() {
  return (
    <>
      <AddNewRoom>
        <p>
          <strong>+</strong> Create Room
        </p>
      </AddNewRoom>
    </>
  );
}

function Room() {
  return (
    <>
      <StyleList>
        <ul>
          <li>
            <Link to="/chatArea">Sport</Link>
          </li>
          <li>
            <Link to="/chatArea">Education</Link>
          </li>
          <li>
            <Link to="/chatArea">Politics</Link>
          </li>
          <li>
            <Link to="/chatArea">Developers</Link>
          </li>
          <li>
            <Link to="/chatArea">Podcast</Link>
          </li>
        </ul>
      </StyleList>
    </>
  );
}

export function RoomList() {
  return (
    <>
      <StyledBackground>
        <UserChoice>
          <button>Public Room</button>
          <button>Private Room</button>
        </UserChoice>
        <Room />
        <CreateNewRoom />
      </StyledBackground>
    </>
  );
}
