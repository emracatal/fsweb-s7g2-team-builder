import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NewMember from "./component/NewMember";

const initialData = [
  { name: "Mehmet Kaan", role: "Forward", email: "mkaan@gmail.com" },
  { name: "Metehan", role: "Midfielder", email: "metehan@gmail.com" },
  { name: "Çağatay", role: "Defender", email: "cagatay@gmail.com" },
];

function App() {
  const [memberList, setMemberList] = useState(initialData);

  return (
    <div className="App">
      <header className="App-header">
        <h2>B E S T T E A M E V E R </h2>
        {memberList.map((uye, i) => (
          <p key={i}>
            {uye.name} - {uye.role} - {uye.email}
          </p>
        ))}
        <NewMember setMemberList={setMemberList} initialData={initialData} />
      </header>
    </div>
  );
}

export default App;

/*         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
