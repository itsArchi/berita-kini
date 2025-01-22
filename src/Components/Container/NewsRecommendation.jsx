/* eslint-disable react/prop-types */
import CategoryDate from "../Elements/CategoryDate";

const NewsRecommendation = ({ imageUrl, title, category, date }) => {
  return (
    <div className="flex flex-col w-[276px] h-[358px] gap-4 mt-16">
      <img
        src={imageUrl}
        alt={title}
        className="w-full rounded-xl object-cover h-40"
      />
      <p className="px-2 gap-3 font-inter font-semibold text-lg leading-[26px] text-[#333333] break-words">
        {title}
      </p>
      <CategoryDate category={category} date={date} />
    </div>
  );
};

export default NewsRecommendation;
