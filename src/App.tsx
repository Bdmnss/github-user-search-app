import { useEffect, useState } from "react";
import User from "./types/user";
import Header from "./components/Header";
import Search from "./components/Search";
import Main from "./components/Main";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<number>(200);
  const [userName, setUserName] = useState<string>("octocat");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUser(data);
      setStatus(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-[#141d2f]">
      <div className="px-[2.4rem] pt-[3.1rem] pb-[7.9rem]">
        <Header />

        <Search setUserName={setUserName} getUser={getUser} status={status} />

        <Main user={user} />
      </div>
    </div>
  );
}

export default App;
