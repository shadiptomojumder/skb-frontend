import FaqSection from "../homepage-sections/FaqSection";
import HeroSection from "../homepage-sections/HeroSection";
import OilImage from "../homepage-sections/OilImage";
import ProductSeries from "../homepage-sections/ProductSeries";

const HomePage = () => {
    return (
        <main className="bg-white">
            <section className="">
                <HeroSection />
                <ProductSeries />
                <OilImage />
                <FaqSection />
            </section>
        </main>
    );
};

export default HomePage;
