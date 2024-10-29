import Image from "next/image";
import Link from "next/link";

type Props = {
  router: string;
  desc: string;
  by: string;
  active1: number;
  active2?: number;
  active3?: number;
};

const icons = ["/g-map.png", "/chatgpt.png", "/clay.png", "/owler.png"];

const Template: React.FC<Props> = ({
  router,
  desc,
  by,
  active1,
  active2,
  active3,
}) => {
  return (
    <Link
      href={router}
      className="flex flex-col justify-between gap-4 border border-[#e7e8ec] p-6 hover:bg-[#fbfbfc]"
    >
      <div className="flex justify-between gap-3">
        <p className="text-[#1d2026] font-[600] w-[90%]">{desc}</p>
        <div className="flex items-start">
          <Image
            src={icons[active1]}
            width={35}
            height={35}
            alt=""
            className="border border-[#e7e8ec]"
          />
          {active2 && (
            <Image
              src={icons[active2 ?? active2]}
              width={35}
              height={35}
              alt=""
              className="border border-[#e7e8ec]"
            />
          )}
          {active3 && (
            <p className="w-[35px] h-[35px] bg-[#f6f6f8] flex justify-center items-center border border-[#e7e8ec]">
              +{active3}
            </p>
          )}
        </div>
      </div>
      <p className="text-[#676d7e">{by}</p>
    </Link>
  );
};

export default Template;
