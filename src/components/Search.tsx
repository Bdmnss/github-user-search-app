type TSearch = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  getUser: () => Promise<void>;
  status: number;
  dark: boolean;
};

const Search: React.FC<TSearch> = ({ setUserName, getUser, status, dark }) => {
  return (
    <div
      className={`flex items-center py-[7px] pl-[1.6rem] pr-[7px] 
        rounded-[1.5rem] relative mb-[1.6rem] ${
          dark ? "bg-[#1e2a47]" : "bg-[#fefefe] shadow-lg"
        }`}
    >
      <img src="images/icon-search.svg" alt="search icon" />
      <input
        type="text"
        className={`w-[100%] bg-inherit ml-[9px] mr-[7px] text-[1.3rem] border-none outline-none ${
          dark
            ? "text-white placeholder:text-white "
            : "text-[#222731] placeholder:text-[#4b6a9b]"
        }`}
        placeholder="Search GitHub username…"
        onChange={(event) => setUserName(event.target.value)}
      />
      <button
        className="bg-[#0079ff] px-[1.8rem] py-[1.2rem] rounded-[1rem] text-[1.6rem] text-white
          font-bold ml-auto hover:bg-[#60abff]"
        onClick={getUser}
      >
        Search
      </button>
      {status !== 200 && (
        <p
          className="absolute text-center right-[11rem] text-[#f74646] bg-inherit text-[1.5rem]
          font-bold"
        >
          No results
        </p>
      )}
    </div>
  );
};

export default Search;
