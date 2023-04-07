import React from "react";
import { useParams } from "react-router-dom";

const TodosList = () => {
  const { groupId } = useParams<{ groupId: string }>();
  return (
    <div>
      <p>Todos List: {groupId}</p>
    </div>
  );
};

export default TodosList;
