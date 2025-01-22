import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-dark-400 text-white py-16 px-[72px] gap-11 flex mt-10">
      <div className="flex gap-[72px]">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" src="/assest/logo-white.png" alt="" />
              <p className="font-poppins font-semibold text-3xl leading-[46.48px]">
                Berita Kini
              </p>
            </div>
            <p className="font-nunito font-normal text-lg leading-[28.8px] text-[#F2F2F2]">
              © 2025 Berita Kini. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p>Ikuti Kami</p>
            <div className="flex gap-6">
              <a href="www.youtube.com">
                <img src="/assest/yt.png" alt="" />
              </a>
              <a href="www.instagram.com">
                <img src="/assest/ig.png" alt="" />
              </a>
              <a href="www.facebook.com">
                <img src="/assest/fb.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
          <p className="font-nunito font-semibold text-[22px] leading-[35.2px]">
            Telusuri
          </p>
          <div className="flex flex-col pr-8 gap-4">
            <Link
              to="/"
              className="font-inter font-semibold text-base leading-6 text-[#F2F2F2] hover:underline"
            >
              Beranda
            </Link>
            <Link
              to="/category/terbaru"
              className="font-inter font-semibold text-base leading-6 text-[#F2F2F2] hover:underline"
            >
              Terbaru
            </Link>
            <Link
              to="/category/hiburan"
              className="font-inter font-semibold text-base leading-6 text-[#F2F2F2] hover:underline"
            >
              Hiburan
            </Link>
            <Link
              to="/category/gayaHidup"
              className="font-inter font-semibold text-base leading-6 text-[#F2F2F2] hover:underline"
            >
              Gaya Hidup
            </Link>
            <Link
              to="/category/olahraga"
              className="font-inter font-semibold text-base leading-6 text-[#F2F2F2] hover:underline"
            >
              Olahraga
            </Link>
            <Link
              to="/category/nasional"
              className="font-inter font-semibold text-base leading-6 text-[#F2F2F2] hover:underline"
            >
              Nasional
            </Link>
            <Link
              to="/category/internasional"
              className="font-inter font-semibold text-base leading-6 text-[#F2F2F2] hover:underline"
            >
              Internasional
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-[22px]">
          <p className="font-nunito font-semibold text-[22px] leading-[35.2px]">
            Bantuan
          </p>
          <div className="flex flex-col pr-8 gap-4">
            <p className="font-inter font-semibold text-base leading-6 text-[#F2F2F2]">
              Kontak Kami
            </p>
            <p className="font-inter font-semibold text-base leading-6 text-[#F2F2F2]">
              Laporan Pembajakan
            </p>
            <p className="font-inter font-semibold text-base leading-6 text-[#F2F2F2]">
              Kebijakan
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
          <p className="font-nunito font-semibold text-[22px] leading-[35.2px]">
            Berlangganan Berita Terbaru
          </p>
          <div className="relative">
            <input
              type="text"
              className="w-[339px] h-16 p-2 rounded-lg border-[#E0E0E0] font-inter font-normal text-base text-[#BDBDBD]"
              placeholder="Masukan email"
            />
            <div className="w-12 h-12 p-3 rounded-md gap-2 bg-primary-500 flex justify-center items-center absolute top-2 right-2">
              <img src="/assest/send.svg" alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
