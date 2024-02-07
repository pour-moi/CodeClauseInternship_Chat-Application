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

const socket = io.connect("http://localhost:5174");

export function ChatPlace() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((messages) => [...messages, data.message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <>
      <button>
        <Link to="/">Back</Link>
      </button>
      <StyledTextArea>
        <h1>Message</h1>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
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
