import { useState } from "react";
import TodoItem from "./TodoItem";

const Create = ({ onRemove, todoList }) => {
  // const [content, setContent] = useState("");

  return (
    <div className="List">
      <h2>{todoList.length}개의 할 일</h2>
      <div>
        {todoList.map((it) => (
          <TodoItem key={it.id} {...it} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

Create.defaultProps = {
  todoList: [],
};

export default Create;
