import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import ContactForm from "../ContactForm";

const Contact = () => {
    return (
        <section className="bg-slate-100 py-28">
            <div className="container mx-auto grid gap-8 lg:grid-cols-2">
                {/* Left Section */}
                <div className="flex flex-col justify-center space-y-8">
                    <div className="space-y-5">
                        <p className="text-lg font-bold text-slate-600">Contact Us</p>
                        <h2 className="text-4xl font-medium text-black">
                            We&lsquo;d love to hear from you. Do you have any question?
                        </h2>
                        <p className="max-w-[500px] text-muted-foreground">
                            Have questions or feedback? Our team is here to help. Fill out the form
                            and we&lsquo;ll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Our Office</h3>
                        <address className="text-muted-foreground not-italic">
                            123 Business Avenue
                            <br />
                            Suite 456
                            <br />
                            New York, NY 10001
                        </address>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                                aria-label="Facebook">
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                                aria-label="Facebook">
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                                aria-label="Facebook">
                                <Youtube size={20} />
                            </Link>
                            
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
