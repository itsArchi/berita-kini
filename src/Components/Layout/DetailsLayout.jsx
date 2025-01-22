import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryDate from "../Elements/CategoryDate";
import Navbar from "../Fragments/Navbar";
import Popular from "../Fragments/Popular";

const DetailsLayout = () => {
  const { category, id } = useParams(); 
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {

    // ERROR
    // GAGAL FETCH KE API DETAIL BERITA

    fetch(`https://api-berita-indonesia.vercel.app/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil detail berita");
        }
        return response.json();
      })
      .then((data) => {
        setNewsDetail(data.data);
      })
      .catch((err) => {
        console.error("Error fetching news detail:", err);
      });
  }, [category, id]);

  return (
    <div className="px-[220px]">
      <Navbar />
      <div className="flex items-center gap-3 border border-red-600">
        <img className="w-4 h-4" src="/assest/home.png" alt="" />
        <p className="font-inter font-normal text-lg leading-[26px] text-[#333333]">Beranda</p>
        <img src="/assest/chevron-right.png" alt="" />
        <p className="font-inter font-normal text-lg leading-[26px] text-[#333333]">{category}</p>
        <img src="/assest/chevron-right.png" alt="" />
        <p className="font-inter font-normal text-lg leading-[26px] text-[#333333]">Detail</p>
      </div>

      <div className="flex">
        <div className="border border-green-600 w-3/4">
          {/* SIDEBAR */}
          <div>
            {/* FULL ARTIKEL */}
            <div className="">
              <div>
                <div className="">
                  <p className="font-inter font-semibold text-4xl text-[#333333] leading-[45.36px]">{newsDetail.title}</p>
                  <CategoryDate category={newsDetail.category} date={newsDetail.pubDate} />
                </div>
                <div>
                  <img className="w-full" src={newsDetail.thumbnail} alt="Gambar Artikel" />
                </div>
              </div>
              <div>
                <p className="font-inter font-medium text-base leading-6 text-dark-200">{newsDetail.caption || "Gambar tidak memiliki caption"}</p>
              </div>
              <p className="font-inter font-medium text-base leading-6 text-dark-400">{newsDetail.content || "Konten tidak tersedia"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-blue-600 w-1/4">
          <Popular />
          <p className="font-inter font-semibold text-lg">Berita Lainnya</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
