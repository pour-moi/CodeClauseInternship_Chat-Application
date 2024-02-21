import styled from "styled-components";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { useEffect, useState } from "react";
const StyledTextArea = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 0.5em;
  input {
    width: 20em;
  }
`;

const Text = styled.div`
  vr {
    height: 1em;
    border-left: 1px solid black;
  }
  display: flex;
  flex-direction: column;
  font-family: "Helvetica";
`;

const User = styled.div`
  font-family: "Helvetica";
  font-weight: bold;
  color: blue;
  margin: 0;
`;
export function ChatPlace() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = io.connect("http://localhost:5174");

  const sendMessage = () => {
    const username = sessionStorage.getItem("username");
    socket.emit("send_message", { username, message });
    console.log("Logged in user: ", sessionStorage.getItem("username"));
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);
  return (
    <>
      <button>
        <Link to="/App">Back</Link>
      </button>
      <StyledTextArea>
        {messages.map((message, index) => (
          <p key={index}>
            <Text>
              <User> {message.username}</User>
              <span
                style={{
                  borderLeft: "3px solid green",
                  borderRadius: "0.2em 0.2em",
                  paddingLeft: "5px",
                }}
              >
                {message.message}
              </span>
            </Text>
          </p>
        ))}
        <input
          type="text"
          placeholder="Message"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </StyledTextArea>
    </>
  );
}
