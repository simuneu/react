import { useState } from "react";

const Sub2 = () => {
  const [name, setName] = useState("lee");
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [todos, setTodos] = useState([
    "study",
    "cooking",
    "leading",
    "swimming",
  ]);

  return (
    <div>
      {name}
      <br />
      {count}
      <br />
      {isVisible && <p>보였다가 사라졌다 하는 글자</p>}
      <br />
      <ul>
        {todos.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
        <br />
      </ul>
      <div>
        <button
          onClick={() => {
            setName("이상순");
          }}
        >
          이름변경
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          숫자변경
        </button>
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          보였다가 숨겼다가
        </button>
        <button
          onClick={() => {
            setTodos((prevTodos) => [...prevTodos, "add todo list"]);
          }}
        >
          목록추가
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Sub2;
