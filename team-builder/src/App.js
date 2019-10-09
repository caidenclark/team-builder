import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [members, setMembers] = useState([
    {},
    {}
  ]);

  console.log(members);
  return (
    <div className="App">
      <h1>Add Team Members!</h1>
      <Form members={members} setMembers={setMembers} />
      <List members={members} />
    </div>
  );
}

export default App;
