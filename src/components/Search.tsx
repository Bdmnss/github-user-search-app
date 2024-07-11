type TSearch = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  getUser: () => Promise<void>;
  status: number;
};

const Search: React.FC<TSearch> = ({ setUserName, getUser, status }) => {
  return (
    <div
      className="flex items-center bg-[#1e2a47] py-[7px] pl-[1.6rem] pr-[7px] 
        rounded-[1.5rem] relative mb-[1.6rem]"
    >
      <img src="images/icon-search.svg" alt="search icon" />
      <input
        type="text"
        className="w-[100%] bg-inherit ml-[9px] mr-[7px] text-[1.3rem] placeholder:text-white 
            border-none outline-none text-white"
        placeholder="Search GitHub username…"
        onChange={(event) => setUserName(event.target.value)}
      />
      <button
        className="bg-[#0079ff] px-[2rem] py-[1.2rem] rounded-[1rem] text-[1.6rem] text-white
          font-bold ml-auto"
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
