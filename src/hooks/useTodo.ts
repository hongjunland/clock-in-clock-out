// utils.ts

import { useState, useCallback, useEffect } from "react";
import { todoAPI } from "../api/todoAPI";
import { User } from "../types";

export default function useTodo(user: User) {
  const [todoContent, setTodoContent] = useState("");

  const getTodo = useCallback(async () => {
    const newTodo = await todoAPI.fetchTodo(user);
    setTodoContent(newTodo ? newTodo?.content : "");
  }, [user]);
  const submitUpdateTodo = async (e: React.MouseEvent<HTMLFormElement>, newTodoContent: string, callback: ()=>void) => {
    e.preventDefault();
    const todo = await todoAPI.fetchTodo(user);
    if (todo) {
      const newTodo = { ...todo, content: newTodoContent };
      const result = await todoAPI.updateTodo(user, newTodo);
      console.log(result);
      callback();
    }
  };
  return {todoContent, getTodo, submitUpdateTodo};
}
