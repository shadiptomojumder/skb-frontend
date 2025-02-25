import BannerImageSelector from '@/components/dashboardComponents/banner-image-selector';
import React from 'react';

const BannerPage = () => {
    return (
        <section className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <p>This is Banner Page</p>
            <BannerImageSelector/>
            <section>
                <h2>I will create Banner Image Update From 1</h2>
            </section>
        </section>
    );
};

export default BannerPage;