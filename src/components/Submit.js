import { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";

const Submit = ({ onCreate }) => {
  const [state, setState] = useState({
    content: "",
    checked: false,
  });

  const contentRef = useRef();
  const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.content.trim().length === 0) {
      contentRef.current.focus();
      return;
    } else {
      if (window.confirm("새로운 할 일을 추가하시겠습니까?")) {
        onCreate(state.content);
        alert("저장 성공");
        setState({
          content: "",
          checked: false,
        });
      }
    }
  };

  return (
    <section className="Submit">
      <div className="input_box text_wrapper">
        <textarea
          placeholder="할 일을 입력 후 저장 버튼을 누르세요."
          name="content"
          ref={contentRef}
          value={state.content}
          checked={false}
          onChange={handleChangeState}
        ></textarea>
      </div>
      <Button text={"저장"} onClick={handleSubmit} />
    </section>
  );
};

export default Submit;
