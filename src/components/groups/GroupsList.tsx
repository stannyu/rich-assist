import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const groupsData = [
  {
    id: 1,
    name: "Group 1",
    todos: [
      {
        id: 1,
        name: "Todo 1",
        description: "Todo 1 description",
        status: "pending",
      },
      {
        id: 2,
        name: "Todo 2",
        description: "Todo 2 description",
        status: "pending",
      },
      {
        id: 3,
        name: "Todo 3",
        description: "Todo 3 description",
        status: "pending",
      },
    ],
  },
  {
    id: 2,
    name: "Group 2",
    todos: [
      {
        id: 1,
        name: "Todo 1",
        description: "Todo 1 description",
        status: "pending",
      },
      {
        id: 2,
        name: "Todo 2",
        description: "Todo 2 description",
        status: "pending",
      },
      {
        id: 3,
        name: "Todo 3",
        description: "Todo 3 description",
        status: "pending",
      },
    ],
  },
  {
    id: 3,
    name: "Group 3",
    todos: [
      {
        id: 1,
        name: "Todo 1",
        description: "Todo 1 description",
        status: "pending",
      },
      {
        id: 2,
        name: "Todo 2",
        description: "Todo 2 description",
        status: "pending",
      },
      {
        id: 3,
        name: "Todo 3",
        description: "Todo 3 description",
        status: "pending",
      },
    ],
  },
];

export type Group = {
  id: number;
  name: string;
  todos: Todo[];
};

export type Todo = {
  id: number;
  name: string;
  description: string;
  status: string;
};

const GroupsList = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    setGroups(groupsData);
  }, []);

  const handleGroupClick = (groupId: number) => {
    navigate(`/board/group/${groupId}`);
  };

  return (
    <div className="container my-0 mx-auto">
      <h3 className="w-full text-center my-4 text-3xl">Groups List</h3>
      <div className="w-4/5 rounded-xl border-2 border-solid border-orange-300 px-5 py-6 my-0 mx-auto min-h-[80vh] bg-white shadow-xl">
        {groups.length > 0 &&
          groups.map((group) => (
            <div
              key={group.id}
              className="flex flex-row cursor-pointer hover:bg-slate-200 transition duration-300 ease-in-out h-14 items-center px-5 rounded-md"
              onClick={() => handleGroupClick(group.id)}
            >
              <div className="w-5/6">
                <p>{group.name}</p>
              </div>
              <div className="w-1/6 text-right">
                <p>{group.todos.length}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GroupsList;
