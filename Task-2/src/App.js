import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const [isLoading,setLoading]=useState(false);
  const loadUsers = async () => {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
    setTimeout( () => {
      setLoading(false);
    },1500)
  };
  return (
    <>
      <header className="app">
        <h1>MODIFY</h1>
        <input type="checkbox" id="toggle" class="toggle" name="toggle"/>
        <label for= "toggle">
          <div className="button" onClick={loadUsers} >
            Get Users
          </div>        
          </label>
          <div id="main"></div>
        </header>
      {isLoading ? "" : ( 
        <div className="card-container">
        <div className="card">
          {users?.map((current, index) => {
            return (
              <div className="profile" key={index}>
                <img src={current.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">
                    {current.first_name} {current.last_name}
                  </h3>
                  <p className="card-text">{current.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}
      
    </>
  );
}
export default App;
