import { useState } from "react";
import Registration from "./pages/Registration/Registration";
import "./App.scss";

const App = () => {
  const [user, setUser] = useState({});

  const getUsers = async (link) => {
    try {
      const response = await fetch(link);

      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      const data = await response.json();
      setUser(data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <button onClick={() => getUsers("http://localhost:8080/user/2")}>
        Click for User
      </button>
      <div>{user.firstName}</div>
      <Registration />
    </div>
  );
};

export default App;
