import Link from "next/link";

type Props = {
  desc: string;
  router: string;
};

const ToggleLink: React.FC<Props> = ({ desc, router }) => {
  return (
    <Link
      href={router}
      className="group flex items-center gap-2 text-sm w-[100px] h-[64px]"
    >
      {desc}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 group-hover:rotate-180 transition duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ToggleLink;
