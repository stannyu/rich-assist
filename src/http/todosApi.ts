import axios from "axios";
import { TodoType } from "../types";
import { BASE_URL } from "./constants";

const todosApi = axios.create({
  baseURL: BASE_URL,
});

const getTodos = async () => {
  const response = await todosApi.get("/todos");
  return response.data;
};

const getTodo = async (id: string) => {
  const response = await todosApi.get(`/todos/${id}`);
  return response.data;
};

const getTodosByGroupId = async (groupId: string) => {
  const response = await todosApi.get(`/todos?group=${groupId}`);
  return response.data;
};

const createTodo = async (todo: TodoType) => {
  const response = await todosApi.post("/todos", todo);
  return response.data;
};

const updateTodo = async (todo: TodoType) => {
  const response = await todosApi.put(`/todos/${todo.id}`, todo);
  return response.data;
};

const deleteTodo = async (id: string) => {
  const response = await todosApi.delete(`/todos/${id}`);
  return response.data;
};

export { getTodos, getTodo, getTodosByGroupId, createTodo, updateTodo, deleteTodo };
