/* eslint-disable react/prop-types */
const HeadingTitle = (props) => {
    const {title} = props;
    return (
        <div className="flex py-3 mb-6 gap-4">
            <img src="/assest/rectangle.png" alt="" />
            <p className="font-nunito text-2xl font-bold leading-[33.6px]">
                {title}
            </p>
        </div>
    )
}

export default HeadingTitle