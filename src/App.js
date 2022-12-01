import React, { useState } from "react";
import "./App.css"; //

function User(props) {
  return <div className="square-style">{props.user.name}</div>;
}

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "항해뽀개기" },
    { id: 2, name: "취업하기" },
    { id: 3, name: "돈많이벌기" },
    { id: 4, name: "숙제열심히하기" },
  ]);
  const [name, setName] = useState("");
  const onClickHandler = () => {
    const newTodo = {
      id: users.length + 1,
      name: name,
    };
    setUsers([...users, newTodo]);
  };
  return (
    <div>
      <div className="actiongroup1">
        <input
          value={name}
          placeholder="오늘 할 일을 적어보세요!"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={onClickHandler}>추가하기</button>
      </div>
      <h1 className="actiongroup2">Todo_list</h1>
      <div className="app-style">
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </div>
    </div>
  );
};

export default App;
