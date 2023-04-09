import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGroups } from "../../http/groupsApi";
import { GroupType } from "../../types";

import "../../assets/styles/modal/modal.scss";
import Modal from "../utils/Modal";

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

export type TodoType = {
  id: number;
  name: string;
  description: string;
  status: string;
};

const GroupsList = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    getGroups().then((response) => {
      setGroups(response);
    });
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    console.log('close modal');
    setIsModalOpen(false);
  };

  const handleGroupClick = (groupId: number) => {
    navigate(`/board/group/${groupId}`);
  };

  return (
    <div className="container my-0 mx-auto">
      <div className="controll_container flex flex-row-reverse">
        <button className="btn btn-accent" onClick={toggleModal}>
          + New group
        </button>
      </div>
      <h3 className="w-full text-center my-4 text-3xl">Groups List</h3>
      <div className="w-4/5 rounded-xl border-2 border-solid border-orange-300 px-5 py-6 my-0 mx-auto min-h-[80vh] bg-white shadow-xl">
        {groups &&
          groups.length > 0 &&
          groups.map((group) => (
            <div
              key={group.id}
              className="flex flex-row cursor-pointer hover:bg-slate-200 transition duration-300 ease-in-out h-14 items-center px-5 rounded-md"
              onClick={() => handleGroupClick(group.id)}
            >
              <div className="w-5/6">
                <p>{group.title}</p>
              </div>
              <div className="w-1/6 text-right">
                <p>8</p>
              </div>
            </div>
          ))}
      </div>
      {isModalOpen && <Modal onClose={closeModal}/>}
    </div>
  );
};

export default GroupsList;
