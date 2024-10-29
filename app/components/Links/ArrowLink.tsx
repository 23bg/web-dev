import Link from "next/link";

type Props = {
  desc: string;
  mode?: boolean;
  router: string;
};

const ArrowLink: React.FC<Props> = ({ desc, mode, router }) => {
  return (
    <>
      <Link
        href={router}
        className={`flex items-center gap-2 font-[600] ${
          mode
            ? "px-4 py-2 rounded transition duration-300 bg-black text-white hover:opacity-80 group/button"
            : "px-4 py-2 rounded transition duration-300 bg-white text-black group/button"
        } `}
      >
        {desc}
        <div className="flex item-center flex-col overflow-hidden relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 group-hover/button:translate-y-[-100%] transition duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 absolute bottom-[-100%] group-hover/button:translate-y-[-100%] transition duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </Link>
    </>
  );
};

export default ArrowLink;
