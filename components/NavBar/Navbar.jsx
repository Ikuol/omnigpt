import Link from "next/link";

const Navbar = ({ toogleModal }) => {
  return (
    <nav className="mx-auto flex justify-between items-center gap-8">
      <div className={`flex items-center justify-center gap-2`}>
        <h2 className="font-extrabold text-white text-[26px]">omnigpt</h2>
        <img src="/vector.png" alt="arrow" className="w-[13px] h-[13px]" />
      </div>
      <div className={`flex items-center justify-center gap-5`}>
        <h2
          className="text-white text-[20px]
            font-bold hover:text-green  cursor-pointer"
        >
          Blog
        </h2>
        <span
          onClick={toogleModal}
          className="text-white text-[20px]
          font-bold hover:text-green cursor-pointer"
        >
          Upgrade
        </span>
        <Link
          href="/signin"
          className="text-white text-[20px]
             font-bold hover:text-green cursor-pointer"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
