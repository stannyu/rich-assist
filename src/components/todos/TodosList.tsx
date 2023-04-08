import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { groupsData, Group } from "../groups/GroupsList";

const TodosList = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [activeGroup, setActiveGroup] = useState<Group | null>(null);

  useEffect(() => {
    if (!groupId) return;

    const group = getGroupById(groupId);
    setActiveGroup(group);
  }, [groupId]);

  const getGroupById = (id: string): Group | null => {
    const group = groupsData.find((group) => group.id === parseInt(id));
    return group || null;
  };

  const { todos } = activeGroup || { todos: [] };

  return (
    <div>
      <p>Todos List: {groupId}</p>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.name}</p>
          <p>{todo.description}</p>
          <p>{todo.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
