/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalPages, onPrevious, onNext, onGoToPage }) => {
  return (
    <div className="flex justify-between items-center mt-16">
      <p className="font-inter font-normal text-base text-[#333333]">
        Showing {currentPage * 8 - 7} to {currentPage * 8 > totalPages * 8 ? totalPages * 8 : currentPage * 8} of {totalPages * 8} results
      </p>
      <div className="flex gap-5">
        <div
          className={`flex justify-center items-center gap-2 cursor-pointer ${
            currentPage === 1 ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={onPrevious}
        >
          <img className="w-4 h-4" src="/assest/arrow-left.svg" alt="Previous" />
          <p className="font-inter font-normal text-base text-dark-400">
            Previous
          </p>
        </div>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <div
                key={index}
                className={`w-10 h-10 rounded-lg py-2 px-4 gap-2.5 flex justify-center items-center cursor-pointer ${
                  currentPage === pageNumber
                    ? "bg-primary-500 text-white"
                    : "bg-transparent text-dark-400"
                }`}
                onClick={() => onGoToPage(pageNumber)}
              >
                <p className="font-inter font-medium text-base leading-6">
                  {pageNumber}
                </p>
              </div>
            );
          }
          if (
            (pageNumber === currentPage - 2 && currentPage > 3) ||
            (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
          ) {
            return (
              <div
                key={index}
                className="w-10 h-10 flex justify-center items-center text-dark-400"
              >
                ...
              </div>
            );
          }
          return null;
        })}
        <div
          className={`flex justify-center items-center gap-2 cursor-pointer ${
            currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={onNext}
        >
          <p className="font-inter font-normal text-base text-dark-400">
            Next
          </p>
          <img className="w-4 h-4" src="/assest/arrow-right.svg" alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
