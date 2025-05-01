import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="bg-slate-100 px-4 py-12">
            <section className="container mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Learn more about our company, our mission, and the services we provide.
                    </p>
                </header>

                {/* About Our Company Section */}
                <section className="mb-24">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:h-[500px]">
                            <Image
                                src="https://matemach.com/cdn/shop/files/4a75b78517ee800cfe90cfbe1610dbe9_480x480_660f9034-f68f-4dad-bbbb-171ff99c6aa7.webp?v=1722915321&width=400"
                                alt="Our company office"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">About Our Company</h2>
                            <p className="text-muted-foreground">
                                Founded in 2015, our company has been at the forefront of innovation
                                in our industry. We started with a simple mission: to provide
                                exceptional products and services that make a difference in
                                people&lsquo;s lives.
                            </p>
                            <p className="text-muted-foreground">
                                Over the years, we&lsquo;ve grown from a small team of passionate
                                individuals to a thriving organization with offices around the
                                world. Despite our growth, we&lsquo;ve remained true to our core
                                values of integrity, excellence, and customer satisfaction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="mb-24">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">
                                Wide range of applications
                            </h2>
                            <p className="text-muted-foreground">
                                Our product range covers various aspects of industrial lubricating
                                oil regeneration machines, including oil-water separation machines,
                                and oil purification machines, widely used in industries such as
                                petrochemicals, power generation, metallurgy, shipping, and
                                mechanical manufacturing. Whether it&lsquo;s constructing new
                                facilities or upgrading existing equipment, we can provide
                                professional solutions to help customers achieve their goals of
                                energy saving, emission reduction, improved production efficiency,
                                and cost reduction.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start">
                                    <div className="mt-1 mr-2 h-5 w-5 rounded-full bg-primary/20 text-center text-sm font-medium text-primary">
                                        1
                                    </div>
                                    <span>Strategic Consulting</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1 mr-2 h-5 w-5 rounded-full bg-primary/20 text-center text-sm font-medium text-primary">
                                        2
                                    </div>
                                    <span>Product Development</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="mt-1 mr-2 h-5 w-5 rounded-full bg-primary/20 text-center text-sm font-medium text-primary">
                                        3
                                    </div>
                                    <span>Implementation & Support</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:h-[500px]">
                            <Image
                                src="https://matemach.com/cdn/shop/files/Web-_13_8ab42267-9ca2-4d9b-9f28-dac722dbd052.jpg?v=1722923451&width=600"
                                alt="Our services illustration"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="mb-24">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:h-[500px]">
                            <Image
                                src="https://img.freepik.com/free-photo/portrait-group-engineers-corporate-managers-standing-factory-looking-camera_637285-4148.jpg?t=st=1746038286~exp=1746041886~hmac=c23ca65bf57c59d040beb570172a15715b0337a367a0eeba001ad2217e036a60&w=996"
                                alt="Our team members"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
                            <p className="text-muted-foreground">
                                Our success is driven by our talented and dedicated team members who
                                bring diverse skills, experiences, and perspectives to the table. We
                                foster a collaborative and inclusive work environment where
                                innovation thrives.
                            </p>
                            <p className="text-muted-foreground">
                                Each member of our team is committed to delivering excellence and
                                exceeding client expectations. We invest in continuous learning and
                                development to stay ahead of industry trends and best practices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="rounded-lg bg-muted p-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight">
                        Ready to Work With Us?
                    </h2>
                    <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                        Contact us today to learn more about our products and services can help your
                        business grow and succeed.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-gray-800 hover:bg-gray-800">
                                Contact Us
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-gray-800 text-gray-800 hover:text-black">
                                View Products
                            </Button>
                        </Link>
                    </div>
                </section>
            </section>
        </section>
    );
}
