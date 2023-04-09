import axios from "axios";
import { GroupType } from "../types";
import { BASE_URL } from "./constants";

const groupsApi = axios.create({
  baseURL: BASE_URL,
});

const getGroups = async () => {
  const response = await groupsApi.get("/groups");
  return response.data;
};

const getGroup = async (id: string) => {
  const response = await groupsApi.get(`/groups/${id}`);
  return response.data;
};

const createGroup = async (group: GroupType) => {
  const response = await groupsApi.post("/groups", group);
  return response.data;
};

const updateGroup = async (group: GroupType) => {
  const response = await groupsApi.put(`/groups/${group.id}`, group);
  return response.data;
};

const deleteGroup = async (id: string) => {
  const response = await groupsApi.delete(`/groups/${id}`);
  return response.data;
};

export { getGroups, getGroup, createGroup, updateGroup, deleteGroup };
