import FaqSection from "../homepage-sections/FaqSection";
import FeaturedProducts from "../homepage-sections/FeaturedProducts";
import HeroSection from "../homepage-sections/HeroSection";
import OilImage from "../homepage-sections/OilImage";
import PopularCategorieSection from "../homepage-sections/PopularCategorySection";
import ProductSeries from "../homepage-sections/ProductSeries";
import ShocaseSection from "../homepage-sections/ShocaseSection";
import WeekendDeals from "../homepage-sections/WeekendDeals";

const HomePage = () => {
    return (
        <main className="bg-white">
            <section className="">
                <HeroSection />
                <ProductSeries/>
                <OilImage/>
                <FaqSection/>
            </section>
        </main>
    );
};

export default HomePage;
