import { useEffect, useState } from "react";
import User from "./types/user";
import Header from "./components/Header";
import Search from "./components/Search";
import Main from "./components/Main";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<number>(200);
  const [userName, setUserName] = useState<string>("octocat");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (response.status === 200) {
        setUser(data);
      }
      setStatus(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`min-h-screen min-w-screen ${
        dark ? "bg-[#141d2f]" : "bg-[#f6f8ff]"
      }`}
    >
      <div
        className="flex flex-col justify-center px-[2.4rem] pt-[3.1rem] pb-[7.9rem] md:min-h-[100vh]
      md:px-[9.8rem] desktop:px-[35.5rem] 2xl:px-[40rem]"
      >
        <Header dark={dark} setDark={setDark} />

        <Search
          setUserName={setUserName}
          getUser={getUser}
          status={status}
          dark={dark}
        />

        <Main user={user} dark={dark} />
      </div>
    </div>
  );
}

export default App;
