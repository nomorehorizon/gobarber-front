import React from "react";
// import { useTransition } from "react-spring";

import Toast from "./Toast";

import { ToastMessage } from "../../hooks/toast";
import { Container } from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  // const messagesWithTransitions: Array<any> = useTransition(
  //   // : Array<any>
  //   messages,
  //   (message: { id: any }) => message.id, // : {id: any}
  //   {
  //     from: { right: "120%" },
  //     enter: { right: "0%" },
  //     leave: { right: "-120%" },
  //   }
  // );

  return (
    <Container>
      {/* {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))} */}
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
