const Header: React.FC<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ dark, setDark }) => {
  return (
    <div className="flex justify-between mb-[3.6rem]">
      <h1
        className={`text-[2.6rem] font-bold ${
          dark ? "text-white" : "text-[#222731]"
        }`}
      >
        devfinder
      </h1>
      <div
        className="flex items-center gap-[1.6rem] cursor-pointer group"
        onClick={() => setDark(!dark)}
      >
        <p
          className={`text-[1.3rem] tracking-[2.5px] font-bold ${
            dark
              ? "text-white group-hover:text-[#90a4d4]"
              : "text-[#4b6a9b] group-hover:text-[#222731]"
          } `}
        >
          LIGHT
        </p>
        <svg
          className={`w-8 h-8 ${
            dark
              ? "text-white group-hover:text-[#90a4d4]"
              : "text-[#4b6a9b] group-hover:text-[#222731]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <g fill="currentColor" fillRule="nonzero">
            <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
