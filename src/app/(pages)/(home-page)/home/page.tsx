import HeroSection from "../homepage-sections/HeroSection/HeroSection";
// import PopularCategorieSection from "../homepage-sections/PopularCategorieSection/PopularCategorieSection";
// import PopularProductSection from "../homepage-sections/PopularProductSection/PopularProductSection";
// import ShocaseSection from "../homepage-sections/ShocaseSection/ShocaseSection";

const HomePage = () => {
    return (
        <main className="bg-white">
            <section className="">
                <HeroSection />
                {/* <ShocaseSection />
                <PopularCategorieSection />
                <PopularProductSection /> */}
            </section>
        </main>
    );
};

export default HomePage;
