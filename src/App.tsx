import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userAPI } from "./api/userAPI";
import { userData } from "./dummy/dummyData";
import HomePage from "./pages/HomePage";
import { User } from "./types/Users";

function App() {
  const [user, setUser] = useState<User>();
  const getUser = async()=>{
    const newUser = await userAPI.fetchUser();
    setUser(newUser);
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {user && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
