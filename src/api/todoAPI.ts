import { todosData } from "../dummy/dummyData";
import { User } from "../types/User";

async function fetchTodo(user: User) {
  await new Promise((re) => setTimeout(re, 1000));
  const todo = todosData.find((el)=>user.id === el.author);
  return todo;
}
export const todoAPI = {
    fetchTodo,
};
