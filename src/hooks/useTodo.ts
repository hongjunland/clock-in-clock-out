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

  return {todoContent, getTodo};
}
