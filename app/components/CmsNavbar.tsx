import Link from "next/link";
import { Lilita_One } from "next/font/google";
import { ArrowBigLeft } from 'lucide-react';

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <ArrowBigLeft />
      </Link>

      <div className={`${font.className} text-3xl text-black`}>
        Turtle
        <span className="text-pink-800">Devs</span>
      </div>
    </div>
  );
};

export default CmsNavbar;