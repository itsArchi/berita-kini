/* eslint-disable react/prop-types */
const CategoryDate = (props) => {
  const { category, date } = props;
  const formatDate = (dateString) => {
    const bulan = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const tanggal = new Date(dateString);
    const day = tanggal.getDate(); 
    const month = bulan[tanggal.getMonth()];
    const year = tanggal.getFullYear(); 

    return `${day} ${month} ${year}`;
  };

  return (
    <div className="flex gap-3 items-center justify-start px-2">
      <p className="text-primary-500 font-nunito font-semibold text-sm leading-[18.75px]">
        {category}
      </p>
      <p className="text-lg text-[#D9D9D9]">•</p>
      <p className="text-dark-400 font-inter font-medium text-sm">
        {formatDate(date)}
      </p>
    </div>
  );
};

export default CategoryDate;
