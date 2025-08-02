import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Form from "../Form";
import axios from "../../axios";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  //console.log(input, "input");

  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) return null;
    await axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
  };

  console.log(todos, "todos");

  return (
    <Container>
      <h2>List of To do</h2>
      {/*Form component*/}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/*To do List*/}
      {/*Key*/}
      {/*Author component*/}
    </Container>
  );
}

export default Todo;
