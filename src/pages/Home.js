import { useEffect, useReducer, useRef, useState } from "react";

import Header from "../components/Header";
import Button from "../components/Button";
// import Checkbox from "../components/Checkbox";
import Submit from "../components/Submit";
import Create from "../components/Create";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("todoList", JSON.stringify(newState));
  return newState;
};

const Home = () => {
  const [data, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    const localData = localStorage.getItem("todoList");
    if (localData) {
      const todoList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.Id)
      );

      if (todoList.length >= 1) {
        dataId.current = parseInt(todoList[0].id) + 1;

        dispatch({ type: "INIT", data: todoList });
      }
    }
  }, []);

  const dataId = useRef(0);

  const onCreate = (content, checked) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        content,
        checked: true,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const [curDate, setCurDate] = useState(new Date());
  const week = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const dayText = week[curDate.getDay()];
  const yearText = curDate.getFullYear();
  const monthText = month[curDate.getMonth()].toLocaleString();

  return (
    <div className="">
      <Header dayText={dayText} yearText={yearText} monthText={monthText} />
      <Submit onCreate={onCreate} />
      <section>
        <Create onRemove={onRemove} todoList={data} />
      </section>
    </div>
  );
};

export default Home;
