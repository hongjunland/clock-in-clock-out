import { useState, useCallback } from "react";
import { todoAPI } from "../api/todoAPI";
import { User } from "../types";

export default function useTodo(user: User) {
  const [todoContent, setTodoContent] = useState("");

  const fetchTodo = useCallback(async () => {
    const newTodo = await todoAPI.fetchTodo(user);
    setTodoContent(newTodo ? newTodo?.content : "");
  }, [user]);
  const updateTodo = async (newTodoContent: string, callback: ()=>void) => {
    const todo = await todoAPI.fetchTodo(user);
    if (todo) {
      const newTodo = { ...todo, content: newTodoContent };
      const result = await todoAPI.updateTodo(user, newTodo);
      callback();
    }
  };
  return {todoContent, fetchTodo, updateTodo};
}
