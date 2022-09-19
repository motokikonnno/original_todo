import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [todoText, setTodoText] = useState<string[]>([]);

  const handleClick = () => {
    const newTodos = [...todoText, text];
    text === ""
      ? alert("空文字は入れることができません")
      : setTodoText(newTodos);
    setText("");
  };

  const handleChange = (e: { target: { value: string } }) => {
    const text = e.target.value;
    setText(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <div onClick={handleClick}>ボタン</div>
      <ul>
        {todoText.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
