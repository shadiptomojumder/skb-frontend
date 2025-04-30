import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
    return (
        <section className="w-full bg-slate-100 py-12 md:py-24 lg:py-32">
            <div className="container mx-auto">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    {/* Left side - Title and description */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                            FAQ
                        </h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Find answers to the most commonly asked questions about our services,
                            products, and how we can help you achieve your goals.
                        </p>
                        <p className="max-w-[600px] text-gray-500">
                            Can't find what you're looking for? Feel free to contact our support
                            team for more assistance.
                        </p>
                    </div>

                    {/* Right side - FAQ accordion */}
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left text-lg">
                                What is the effect?
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                After the waste oil is recycled and filtered by my equipment, the impurities, moisture and harmful substances inside can be filtered out, the acid value of the oil can be reduced, the odor can be removed, the color can be restored, the original index of the oil can be restored, the filtered oil can be reused, which can reduce your oil cost, more environmental protection and energy saving.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left text-lg">
                                Principle of the equipment? Filtered oil?
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                Our equipment is filtered through physical reverse osmosis without adding any chemicals. It’s an environmentally friendly material (resin material, polypropylene, activated carbon, etc.) with a filtration accuracy of up to 0.5 microns. The filtered oil can reach the target of 98% new oil，and can be recycled.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left text-lg">
                                Which oils are filtered?
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                This machine can be used for industrial lubricating oil purification, such as hydraulic oil, gear oil, cutting oil, transformer oil, track oil, quenching oil, turbine oil, rolling oil, anti-rust oil, spark oil, screw oil, gasoline, diesel oil, kerosene, cooking oil, etc. Cannot be used for engine oil (Except for engine oil)
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left text-lg">
                                We offer a variety of ways to buy?
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                    <p>1. You can place an order directly through this website.</p>
                                    <p>2. you can contact our sales staff for consultation and purchase.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
