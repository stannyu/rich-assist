type StatusType = "active" | "completed";

export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
  group: string;
};