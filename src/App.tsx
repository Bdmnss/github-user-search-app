function App() {
  return (
    <div className="min-h-screen min-w-screen bg-[#141d2f]">
      <div className="px-[2.4rem] pt-[3.1rem] pb-[7.9rem]">
        <div className="flex justify-between mb-[3.6rem]">
          <h1 className="text-[2.6rem] font-bold text-white">devfinder</h1>
          <div className="flex items-center gap-[1.6rem] cursor-pointer group">
            <p
              className="text-[1.3rem] tracking-[2.5px] font-bold text-white 
            group-hover:text-[#90a4d4]"
            >
              LIGHT
            </p>
            <svg
              className="w-8 h-8 text-white group-hover:text-[#90a4d4]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor" fillRule="nonzero">
                <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
              </g>
            </svg>
          </div>
        </div>

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
          />
          <button
            className="bg-[#0079ff] px-[2rem] py-[1.2rem] rounded-[1rem] text-[1.6rem] text-white
          font-bold ml-auto"
          >
            Search
          </button>
          <p
            className="absolute text-center right-[11rem] text-[#f74646] bg-inherit text-[1.5rem]
          font-bold hidden"
          >
            No results
          </p>
        </div>

        <div className="bg-[#1e2a47] pt-[3.2rem] px-[2.4rem] pb-[4.8rem] rounded-[1.5rem]">
          <div className="flex items-center gap-[2rem] mb-[3.4rem]">
            <img
              src="images/profile-pic.webp"
              alt="profile picture"
              className="w-[7rem] rounded-full"
            />
            <div>
              <p className="text-[1.6rem] text-white font-bold">The Octocat</p>
              <a href="" className="text-[1.3rem] text-[#0079ff]">
                @octocat
              </a>
              <p className="text-[1.3rem] text-white">Joined 25 Jan 2011</p>
            </div>
          </div>

          <p className="text-[1.3rem] text-white mb-[2.2rem]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>

          <div
            className="bg-[#141d2f] flex justify-evenly text-center text-white py-[1.9rem] 
          rounded-[10px] mb-[2.5rem]"
          >
            <div>
              <p className="text-[1.1rem] mb-[8px]">Repos</p>
              <p className="text-[1.6rem] font-bold">8</p>
            </div>

            <div>
              <p className="text-[1.1rem] mb-[8px]">Followers</p>
              <p className="text-[1.6rem] font-bold">3938</p>
            </div>

            <div>
              <p className="text-[1.1rem] mb-[8px]">Following</p>
              <p className="text-[1.6rem] font-bold">9</p>
            </div>
          </div>

          <div>
            <div className="flex items-center text-white gap-[1.9rem] mb-[1.6rem]">
              <img src="images/icon-location.svg" alt="location icon" />
              <a href="" className="text-[1.3rem]">
                San Francisco
              </a>
            </div>

            <div className="flex items-center text-white gap-[1.3rem] mb-[1.6rem]">
              <img src="images/icon-website.svg" alt="website icon" />
              <a href="" className="text-[1.3rem]">
                https://github.blog
              </a>
            </div>

            <div className="flex items-center text-white gap-[1.3rem] mb-[1.6rem]">
              <img src="images/icon-twitter.svg" alt="twitter icon" />
              <a href="" className="text-[1.3rem]">
                Not Available
              </a>
            </div>

            <div className="flex items-center text-white gap-[1.3rem]">
              <img src="images/icon-company.svg" alt="company icon" />
              <a href="" className="text-[1.3rem]">
                @github
              </a>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default App;
