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

const Text = styled.span`
  display: flex;
  flex-direction: column;
`;

const User = styled.p`
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
        <h1>Message</h1>
        {messages.map((message, index) => (
          <p key={index}>
            <Text>
              <User> {message.username}</User>
              <br /> {message.message}
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
