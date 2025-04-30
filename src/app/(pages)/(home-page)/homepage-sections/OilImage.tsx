import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const OilImage = () => {
    return (
        <div className="flex flex-col items-center gap-12 bg-slate-100 py-20">
            <div className="space-y-6">
                <p className="text-center text-2xl font-bold sm:text-4xl">
                    Before vs After: Oil Filtration
                </p>
                <p className="text-center text-base sm:text-xl">
                    Visual comparison of diesel and hydraulic oil before and after treatment. Move
                    the handle to witness real results.
                </p>
            </div>
            <ReactCompareSlider
                boundsPadding={0}
                itemOne={
                    <ReactCompareSliderImage
                        src="https://res.cloudinary.com/lalonstore/image/upload/v1746010847/oil_before_iwcpyq.webp"
                        srcSet="https://res.cloudinary.com/lalonstore/image/upload/v1746010847/oil_before_iwcpyq.webp"
                        alt="Image one"
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        src="https://res.cloudinary.com/lalonstore/image/upload/v1746010838/oil_after_nibmsb.webp"
                        srcSet="https://res.cloudinary.com/lalonstore/image/upload/v1746010838/oil_after_nibmsb.webp"
                        alt="Image two"
                    />
                }
                // style={{
                //     backgroundColor: "white",
                //     width: "1000px",
                // }}

                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "1000px",
                    margin: "0 auto",
                    aspectRatio: "2000/1125",
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    boxSizing: "border-box", // ensures padding doesn't exceed width
                }}
            />

            <div className="relative flex h-40 flex-col items-center justify-center sm:h-52 md:h-64">
                {/* Background text */}
                <div className="absolute text-[125px] font-bold text-gray-400 opacity-30 select-none sm:text-[100px] md:text-[180px]">
                    100%
                </div>

                {/* Foreground title */}
                <h2 className="relative z-10 text-lg font-semibold text-black sm:text-2xl font-montserrat">
                    Purification
                </h2>
            </div>
        </div>
    );
};

export default OilImage;
