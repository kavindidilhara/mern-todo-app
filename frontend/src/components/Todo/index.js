import React, { useState } from "react";
import { Container } from "./styles";
import Form from "../Form";

function Todo() {
  const [input, setInput] = useState("");
  console.log(input, "input");
  return (
    <Container>
      <h2>List of To do</h2>
      {/*Form component*/}
      <Form input={input} setInput={setInput} />
      {/*To do List*/}
      {/*Key*/}
      {/*Author component*/}
    </Container>
  );
}

export default Todo;
