import Headline from "../Fragments/Headline"
import Popular from "../Fragments/Popular"
import Recommendation from "../Fragments/Recommendation"
import Ads from "../Fragments/Ads"
import Footer from "../Fragments/Footer"
import Navbar from "../Fragments/Navbar"

const HomeLayout = () => {
    return (
        <div className="px-[220px] gap-32">
            <Navbar />
            <Headline />
            <Popular />
            <Recommendation />
            <Ads />
            <Footer />
        </div>
    )
}

export default HomeLayout