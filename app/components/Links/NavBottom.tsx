import Link from "next/link";

type Props = {
  desc: string;
  router: string;
};

const NavBottomLink: React.FC<Props> = ({ desc, router }) => {
  return (
    <Link href={router} className="group">
      <div className="relative group-hover:after:w-full after:transition-all after:duration-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#000000] after:bottom-0 after:left-0">
        {desc}
      </div>
    </Link>
  );
};

export default NavBottomLink;
