/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const Headline = () => {
  const [headlineData, setHeadlineData] = useState({
    text: "",
    title: "",
    description: "",
    date: "",
    imageUrl: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const formatDate = (isoDate) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(isoDate).toLocaleDateString('id-ID', options);
  };

  const fetchHeadline = async (page) => {
    try {
      const response = await fetch(
        `https://api-berita-indonesia.vercel.app/tempo/bola/?page=${page}`
      );
      const data = await response.json();
      if (
        data &&
        data.data &&
        data.data.posts &&
        data.data.posts.length > 0
      ) {
        const postIndex = currentPage - 1;
        const post = data.data.posts[postIndex];
        setHeadlineData({
          text: "Headline",
          title: post.title,
          description: post.description,
          date: formatDate(post.pubDate),
          imageUrl: post.thumbnail,
        });
      } else {
        console.error("Data tidak sesuai dengan struktur yang diharapkan");
      }
    } catch (error) {
      console.error("Error fetching headline data:", error);
    }
  };

  useEffect(() => {
    fetchHeadline(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-11">
      <div className="flex justify-between gap-[154px] w-full">
        <div className="flex flex-col gap-4">
          <p className="font-inter text-base font-semibold leading-[26px] text-dark-400">
            {headlineData.text}
          </p>
          <p className="font-nunito font-bold text-4xl leading-[46.8px] text-[#333333]">
            {headlineData.title}
          </p>
          <p className="font-inter font-normal text-base text-[#4F4F4F]">
            {headlineData.description}
          </p>
          <div className="flex items-center gap-2">
            <img src="/assest/calendar.png" alt="calendar icon" />
            <p className="font-inter font-medium text-sm text-dark-400">
              {headlineData.date}
            </p>
          </div>
          <button className="flex items-center py-1 gap-2 text-primary-500 text-lg font-medium font-inter">
            Baca Selengkapnya <img src="/assest/arrow-up-right.png" alt="arrow icon" />
          </button>
        </div>
        <div className="w-full h-[417px] rounded-[20px] overflow-hidden">
          <img
            src={headlineData.imageUrl}
            alt={headlineData.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="gap-4 font-inter font-medium text-sm flex justify-center text-dark-400 mt-10">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center ${currentPage === 1 ? "opacity-50" : ""}`}
        >
          <img src="/assest/chevron-left.png" alt="Previous Page" />
        </button>
        <p>{currentPage}</p>
        <p>dari</p>
        <p>{totalPages}</p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center ${currentPage === totalPages ? "opacity-50" : ""}`}
        >
          <img src="/assest/chevron-right.png" alt="Next Page" />
        </button>
      </div>
    </div>
  );
};

export default Headline;
