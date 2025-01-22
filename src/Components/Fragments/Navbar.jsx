import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = ["beranda", "terbaru", "hiburan", "gayaHidup", "olahraga", "nasional", "internasional"];

  return (
    <nav className="bg-white py-8 px-[72px] border-b border-[#F2F2F2] mb-16">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex justify-between items-center gap-3 font-poppins text-xl text-dark-800 font-semibold leading-7.5">
          <img className="w-11 h-11" src="/assest/logo.png" alt="logo" />
          Berita Kini
        </Link>
        <ul className="flex space-x-4">
          {categories.map((cat) => (
            <li key={cat}>
              <Link 
                to={cat === "beranda" ? "/" : `/category/${cat}`} 
                className="font-poppins text-base font-semibold text-[#828282] hover:text-primary-500 capitalize"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
