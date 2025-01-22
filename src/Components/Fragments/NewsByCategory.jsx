import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsRecommendation from "../Container/NewsRecommendation";
import Navbar from "./Navbar";
import Pagination from "../Elements/Pagination";
import Footer from "./Footer";

const NewsByCategory = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(news.length / itemsPerPage);

  useEffect(() => {
    fetch(`https://api-berita-indonesia.vercel.app/cnn/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Gagal mengambil berita: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setNews(data.data.posts))
      .catch((error) => console.error(error));
  }, [category]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  return (
    <div className="flex justify-center items-center px-[220px]">
      <div className="w-full ">
        <Navbar />
        <div className="grid grid-cols-4 gap-8 mt-8">
          {currentNews.map((item) => (
            <NewsRecommendation
              key={item.pubDate}
              imageUrl={item.thumbnail}
              title={item.title}
              category={item.category || "Nasional"}
              date={
                item.pubDate
                  ? new Date(item.pubDate).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Tanggal tidak tersedia"
              }
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
        <Footer />
      </div>
    </div>
  );
};

export default NewsByCategory;
