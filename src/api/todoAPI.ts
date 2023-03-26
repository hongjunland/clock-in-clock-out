import { todosData } from "../dummy/dummyData";
import { Todo } from "../types/Todo";
import { User } from "../types/User";

async function fetchTodo(user: User) {
  await new Promise((re) => setTimeout(re, 100));
  const todo = todosData.find((el) => user.id === el.author);
  return todo;
}
async function updateTodo(user: User, newTodo: Todo) {
  await new Promise((re) => setTimeout(re, 100));
  const idx = todosData.findIndex((el: Todo) => el.author === user.id);
  todosData[idx] = newTodo;
  return newTodo;
}
export const todoAPI = {
  fetchTodo,
  updateTodo,
};
