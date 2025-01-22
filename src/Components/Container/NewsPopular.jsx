/* eslint-disable react/prop-types */
import CategoryDate from "../Elements/CategoryDate";

const NewsPopular = ({ title, category, date, image }) => {
  return (
    <div className="p-4 gap-4 rounded-xl w-[400px] h-40 flex relative">
      <img className="w-[147px] h-[128px] rounded-xl" src={image} alt={title} />
      <div className="flex flex-col justify-between gap-4 w-60">
        <p className="font-nunito font-bold text-base text-[#333333] leading-[22.4px] break-words">
          {title}
        </p>
        <CategoryDate category={category} date={date} />
      </div>
    </div>
  );
};

export default NewsPopular;
