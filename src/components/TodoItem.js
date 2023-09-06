import React, { useState } from "react";
import { BsCheckCircle, BsCheckCircleFill, BsTrashFill } from "react-icons/bs";

const TodoItem = ({ checked: propChecked, onRemove, id, content }) => {
  const [checked, setChecked] = useState(propChecked);

  const handleCheck = () => {
    setChecked(!checked);
    // console.log("check");
  };

  return (
    <div className="TodoItem">
      <div
        className={["checkBtn", checked ? `checkBtn_off` : `checkBtn_on`].join(
          " "
        )}
        onClick={handleCheck}
      >
        {checked ? <BsCheckCircle /> : <BsCheckCircleFill />}
      </div>
      <div className="content">{content}</div>
      <div className="removeBtn">
        <BsTrashFill
          onClick={() => {
            console.log(id);
            if (window.confirm(`정말 삭제하시겠습니까?`)) {
              onRemove(id);
            }
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
