import "./App.css";
import { Box } from "@chakra-ui/react";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import AddTodo from "./components/Form";
function App() {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <Box style={{ width: "80%", marginInline: "auto", marginTop: 20 }}>
      <AddTodo setTodoData={setTodoData} />
      <Todo todoData={todoData} setTodoData={setTodoData} />
    </Box>
  );
}

export default App;
