/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import HeadingTitle from "../Elements/HeadingTitle";
import NewsRecommendation from "../Container/NewsRecommendation";
import Pagination from "../Elements/Pagination";


const Recommendation = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString)
      .toLocaleDateString("en-US", options)
      .replace(",", "");
  };

  const fetchNews = () => {
    fetch(
      `https://api-berita-indonesia.vercel.app/antara/terbaru?search=${searchTerm}`
    )
      .then((response) => {
        console.log("Response Status:", response.status);
        if (!response.ok) {
          return Promise.reject(
            new Error(`Gagal mengambil data: ${response.statusText}`)
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
        setNews(data.data.posts);
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchNews();
    }
  }, [searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="pt-10 gap-11 mt-8">
      <div className="flex justify-between">
        <HeadingTitle title="Rekomendasi Untuk Anda" />
        <div className="relative">
          <input
            className="w-[492px] h-[62px] rounded-lg border border-[#E0E0E0] py-3 px-4 font-inter font-normal text-base text-dark-200"
            type="text"
            placeholder="Cari disini..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img
            className="absolute top-6 right-6 cursor-pointer"
            src="/assest/search.png"
            alt="Search"
            onClick={fetchNews}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 -mt-10">
        {currentItems.map((item) => (
          <NewsRecommendation
            key={item.pubDate}
            imageUrl={item.thumbnail}
            title={item.title}
            category={item.category || "Nasional"}
            date={formatDate(item.pubDate)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onGoToPage={goToPage}
      />
    </div>
  );
};

export default Recommendation;
