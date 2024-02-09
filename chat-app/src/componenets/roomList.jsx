import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Helvetica';
  src: url('/chat-app/fonts/HelveticaNeueLTStd-Roman.otf') format('truetype');
}
`;

const StyledBackground = styled.div`
  background-color: white;
  height: 90vh;
  border-radius: 2.7em 2.7em 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const UserChoice = styled.div`
  display: flex;
  justify-content: center;
  // gap: 3.3em;
  // background-color: rgba(220, 232, 254, 255);
  height: 3em;
  width: 17em;
  margin-top: 1em;
  border-radius: 2em;
  // button {
  //   border-style: none;
  //   background-color: rgba(220, 232, 254, 255);
  // }
`;

const StyleList = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    font-weight: bold;
    padding: 0;
  }
  li {
    width: 80vw;
    font-family: "Helvetica";
  }
  li::before {
    content: "";
    display: inline-block;
    width: 3em;
    height: 5em;
    margin-right: 1em;
    vertical-align: middle;
  }
  li.cyber::before {
    background: url("https://i.pinimg.com/736x/38/70/af/3870afcd1245ca68320328283697b266.jpg")
      no-repeat center/contain;
  }
  li.design::before {
    background: url("https://i.pinimg.com/564x/5d/b2/a6/5db2a6ecaadf7ecebf559cf1d2e47edd.jpg")
      no-repeat center/contain;
  }
  li.cloud::before {
    background: url("https://i.pinimg.com/564x/dd/b1/7c/ddb17ce6d8e394f9264b874e12b56cce.jpg")
      no-repeat center/contain;
  }
  li.dev::before {
    background: url("https://i.pinimg.com/564x/b0/0a/88/b00a8834ebe5591e27a2d75ef900e1ce.jpg")
      no-repeat center/contain;
  }
  li.random::before {
    background: url("https://i.pinimg.com/736x/71/bc/e4/71bce4bab339272a10546d368d02e331.jpg")
      no-repeat center/contain;
  }
  a {
    color: black;
    text-decoration: none;
  }
  li:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`;

// const AddNewRoom = styled.div`
//   background-color: rgba(67, 131, 252, 255);
//   border-radius: 2em;
//   width: 7em;
//   padding: 0.2em;
//   position: absolute;
//   right: 0;
//   bottom: 0;
// `;

// function CreateNewRoom() {
//   return (
//     <>
//       <AddNewRoom>
//         <p>
//           <strong>+</strong> Create Room
//         </p>
//       </AddNewRoom>
//     </>
//   );
// }

function Room() {
  const paths = {
    cyber: "/chatArea/cyber",
    design: "/chatArea/design",
    cloud: "/chatArea/cloud",
    devops: "/chatArea/developers",
    random: "/chatArea/random",
  };
  return (
    <>
      <StyleList>
        <ul>
          <li className="cyber">
            <Link to={paths.cyber}>Cyber Sec</Link>
          </li>
          <li className="design">
            <Link to={paths.design}>Design</Link>
          </li>
          <li className="cloud">
            <Link to={paths.cloud}>Cloud</Link>
          </li>
          <li className="dev">
            <Link to={paths.developers}>DevOps</Link>
          </li>
          <li className="random">
            <Link to={paths.random}>Random</Link>
          </li>
        </ul>
      </StyleList>
    </>
  );
}

export function RoomList() {
  return (
    <>
      <GlobalStyle />
      <StyledBackground>
        <UserChoice>
          <h1>Rooms</h1>
        </UserChoice>
        <Room />
        {/* <CreateNewRoom /> */}
      </StyledBackground>
    </>
  );
}
