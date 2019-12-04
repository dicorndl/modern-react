import React from 'react';
import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink" />
        <Counter />
      </Wrapper>
      <InputSample />
      <UserList />
    </div>
  );
}

export default App;
