import { useState, useEffect } from "react";
import NewsPopular from "../Container/NewsPopular";
import HeadingTitle from "../Elements/HeadingTitle";
import Pagination from "../Elements/Pagination";

const Popular = () => {
  const [popularNews, setPopularNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); 
  const totalPages = Math.ceil(popularNews.length / itemsPerPage);

  useEffect(() => {
    const fetchPopularNews = async () => {
      try {
        const response = await fetch(
          "https://api-berita-indonesia.vercel.app/cnn/terbaru"
        );
        const data = await response.json();
        if (data && data.data && data.data.posts) {
          setPopularNews(data.data.posts);
        } else {
          console.error("Data tidak sesuai dengan struktur yang diharapkan");
        }
      } catch (error) {
        console.error("Error fetching popular news:", error);
      }
    };

    fetchPopularNews();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = popularNews.slice(indexOfFirstItem, indexOfLastItem);

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
    <div className="flex flex-col">
      <HeadingTitle title="Berita Terpopuler" />
      <div className="grid grid-cols-2 gap-96 md:grid-cols-4 lg:grid-cols-4">
        {currentItems.map((newsItem) => (
          <NewsPopular
            key={newsItem.pubDate}
            title={newsItem.title}
            category="Terpopuler"
            date={newsItem.pubDate}
            image={newsItem.thumbnail}
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

export default Popular;
