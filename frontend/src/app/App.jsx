import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(user);

  return (
    <>
      <div>
        {user.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>
    </>
  );
}

export default App;
