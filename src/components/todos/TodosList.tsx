import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";

import { getTodosByGroupId } from "../../http/todosApi";
import { TodoType } from "../../types";

const TodosList = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [todos, setTodos] = useState<TodoType[] | null>(null);

  useEffect(() => {
    if (!groupId) return;
    getTodosByGroupId(groupId).then((data) => setTodos(data));
  }, [groupId]);

  return (
    <div>
      <p>Todos List: {groupId}</p>
      <div className="w-4/5 rounded-xl border-2 border-solid border-orange-300 px-5 py-6 my-0 mx-auto min-h-[80vh] bg-white shadow-xl">
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-row cursor-pointer hover:bg-slate-200 transition duration-300 ease-in-out h-14 items-center px-5 rounded-md"
            >
              <p className="px-3">{todo.title}</p>
              <p className="grow px-3">{todo.group}</p>
              <p className="px-3">{todo.completed}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodosList;
