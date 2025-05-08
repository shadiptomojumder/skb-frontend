import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import whatsappQr from "../../../../../public/icons/whatsapp.png";
import ContactForm from "../ContactForm";
import wechatQr from "../../../../../public/icons/wechat.png"

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


                    {/* <div className="space-y-4">
                        <h3 className="text-lg font-medium">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                                aria-label="Facebook">
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                                aria-label="Facebook">
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                                aria-label="Facebook">
                                <Youtube size={20} />
                            </Link>
                        </div>
                    </div> */}

                    
                    
                </div>

                {/* Right Section - Contact Form */}
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <ContactForm />
                </div>
            </div>
            <div className="container mx-auto mt-20 flex items-center justify-center gap-10">
                <div className="flex items-center gap-5 rounded-lg bg-white p-5 drop-shadow-lg">
                    <div className="space-y-2">
                        <p className="ml-2 text-lg font-bold tracking-wide text-[#0C0C0C] dark:text-primary">
                            BD Contacts
                        </p>
                        <div className="flex items-center gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}>
                                        <path
                                            fill="currentColor"
                                            fillOpacity={0}
                                            strokeDasharray={64}
                                            strokeDashoffset={64}
                                            d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                                            <animate
                                                fill="freeze"
                                                attributeName="fill-opacity"
                                                begin="0.7s"
                                                dur="0.15s"
                                                values="0;0.3"></animate>
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                dur="0.6s"
                                                values="64;0"></animate>
                                        </path>
                                        <path
                                            strokeDasharray={4}
                                            strokeDashoffset={4}
                                            d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="0.85s"
                                                dur="0.3s"
                                                values="4;0"></animate>
                                        </path>
                                        <path
                                            strokeDasharray={6}
                                            strokeDashoffset={6}
                                            d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="1.05s"
                                                dur="0.3s"
                                                values="6;0"></animate>
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <a
                                href="tel:+8801796692501"
                                target="_blank"
                                aria-label="Our phone"
                                title="Our phone"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                +880 17252 42424
                            </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                        <path d="M12 4.428a7.572 7.572 0 0 0-6.183 11.944a.75.75 0 0 1 .077.731L4.82 19.586l3.147-.913a.75.75 0 0 1 .554.054A7.572 7.572 0 1 0 12 4.428M2.928 12a9.072 9.072 0 1 1 5.176 8.195L3.71 21.47a.75.75 0 0 1-.897-1.018l1.542-3.568A9.03 9.03 0 0 1 2.928 12"></path>
                                        <path
                                            d="M4.428 12a7.572 7.572 0 1 1 4.093 6.727a.75.75 0 0 0-.554-.054l-3.147.913l1.074-2.483a.75.75 0 0 0-.077-.731A7.53 7.53 0 0 1 4.428 12m8.944 2.753c-.372.22-1.187.287-2.736-1.262s-1.482-2.363-1.262-2.736c.56-.057 1.097-.432 1.595-.93c.369-.369.07-1.264-.666-2c-.737-.737-1.632-1.035-2-.667c-2.372 2.371-1.184 5.482 1 7.667c2.214 2.214 5.238 3.428 7.666 1c.369-.369.07-1.264-.666-2c-.737-.737-1.632-1.035-2-.667c-.499.498-.874 1.035-.93 1.595"
                                            opacity={0.5}></path>
                                    </g>
                                </svg>
                            </div>
                            <a
                                href=" https://wa.me/+8801716320703"
                                target="_blank"
                                aria-label="Our phone"
                                title="Our phone"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                +880 1716-320703

                            </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        fillOpacity={0}
                                        d="M12 13l-8 -5v10h16v-10l-8 5Z">
                                        <animate
                                            fill="freeze"
                                            attributeName="fill-opacity"
                                            begin="0.8s"
                                            dur="0.15s"
                                            values="0;0.3"></animate>
                                    </path>
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}>
                                        <path
                                            strokeDasharray={64}
                                            strokeDashoffset={64}
                                            d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                dur="0.6s"
                                                values="64;0"></animate>
                                        </path>
                                        <path
                                            strokeDasharray={24}
                                            strokeDashoffset={24}
                                            d="M3 6.5l9 5.5l9 -5.5">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="0.6s"
                                                dur="0.2s"
                                                values="24;0"></animate>
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <a
                                href="mailto:info@growoly.com"
                                target="_blank"
                                aria-label="Our email"
                                title="Our email"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                info@skbbest.com
                            </a>
                        </div>
                        <div className="flex items-start gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 4C9.24 4 7 6.24 7 9c0 2.85 2.92 7.21 5 9.88c2.11-2.69 5-7 5-9.88c0-2.76-2.24-5-5-5m0 7.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                                        opacity={0.3}></path>
                                    <path
                                        fill="currentColor"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"></path>
                                    <circle cx={12} cy={9} r={2.5} fill="currentColor"></circle>
                                </svg>
                            </div>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                House 269,Mudafa, Kholil market, <br></br>Tongi,Gazipur
                            </a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={whatsappQr}
                            alt="whatsapp QR"
                            width={50}
                            height={50}
                            className="aspect-square w-[200px]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5 rounded-lg bg-white p-5 drop-shadow-lg">
                    <div className="space-y-2">
                        <p className="ml-2 text-lg font-bold tracking-wide text-[#0C0C0C] dark:text-primary">
                            China Contacts
                        </p>
                        <div className="flex items-center gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}>
                                        <path
                                            fill="currentColor"
                                            fillOpacity={0}
                                            strokeDasharray={64}
                                            strokeDashoffset={64}
                                            d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                                            <animate
                                                fill="freeze"
                                                attributeName="fill-opacity"
                                                begin="0.7s"
                                                dur="0.15s"
                                                values="0;0.3"></animate>
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                dur="0.6s"
                                                values="64;0"></animate>
                                        </path>
                                        <path
                                            strokeDasharray={4}
                                            strokeDashoffset={4}
                                            d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="0.85s"
                                                dur="0.3s"
                                                values="4;0"></animate>
                                        </path>
                                        <path
                                            strokeDasharray={6}
                                            strokeDashoffset={6}
                                            d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="1.05s"
                                                dur="0.3s"
                                                values="6;0"></animate>
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <a
                                href="tel:+8801796692501"
                                target="_blank"
                                aria-label="Our phone"
                                title="Our phone"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                +880 17252 42424
                            </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                        <path d="M12 4.428a7.572 7.572 0 0 0-6.183 11.944a.75.75 0 0 1 .077.731L4.82 19.586l3.147-.913a.75.75 0 0 1 .554.054A7.572 7.572 0 1 0 12 4.428M2.928 12a9.072 9.072 0 1 1 5.176 8.195L3.71 21.47a.75.75 0 0 1-.897-1.018l1.542-3.568A9.03 9.03 0 0 1 2.928 12"></path>
                                        <path
                                            d="M4.428 12a7.572 7.572 0 1 1 4.093 6.727a.75.75 0 0 0-.554-.054l-3.147.913l1.074-2.483a.75.75 0 0 0-.077-.731A7.53 7.53 0 0 1 4.428 12m8.944 2.753c-.372.22-1.187.287-2.736-1.262s-1.482-2.363-1.262-2.736c.56-.057 1.097-.432 1.595-.93c.369-.369.07-1.264-.666-2c-.737-.737-1.632-1.035-2-.667c-2.372 2.371-1.184 5.482 1 7.667c2.214 2.214 5.238 3.428 7.666 1c.369-.369.07-1.264-.666-2c-.737-.737-1.632-1.035-2-.667c-.499.498-.874 1.035-.93 1.595"
                                            opacity={0.5}></path>
                                    </g>
                                </svg>
                            </div>
                            <a
                                href=" https://wa.me/+8801725242424"
                                target="_blank"
                                aria-label="Our phone"
                                title="Our phone"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                +880 17252 42424
                            </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        fillOpacity={0}
                                        d="M12 13l-8 -5v10h16v-10l-8 5Z">
                                        <animate
                                            fill="freeze"
                                            attributeName="fill-opacity"
                                            begin="0.8s"
                                            dur="0.15s"
                                            values="0;0.3"></animate>
                                    </path>
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}>
                                        <path
                                            strokeDasharray={64}
                                            strokeDashoffset={64}
                                            d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                dur="0.6s"
                                                values="64;0"></animate>
                                        </path>
                                        <path
                                            strokeDasharray={24}
                                            strokeDashoffset={24}
                                            d="M3 6.5l9 5.5l9 -5.5">
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="0.6s"
                                                dur="0.2s"
                                                values="24;0"></animate>
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <a
                                href="mailto:info@growoly.com"
                                target="_blank"
                                aria-label="Our email"
                                title="Our email"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                info@skbbest.com
                            </a>
                        </div>
                        <div className="flex items-start gap-1.5">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12 4C9.24 4 7 6.24 7 9c0 2.85 2.92 7.21 5 9.88c2.11-2.69 5-7 5-9.88c0-2.76-2.24-5-5-5m0 7.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"
                                        opacity={0.3}></path>
                                    <path
                                        fill="currentColor"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"></path>
                                    <circle cx={12} cy={9} r={2.5} fill="currentColor"></circle>
                                </svg>
                            </div>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="hover:text-gary-800 font-rubik font-semibold text-gray-900 transition-colors duration-300">
                                House 269,Mudafa, Kholil market, <br></br>Tongi,Gazipur
                            </a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={wechatQr}
                            alt="whatsapp QR"
                            width={50}
                            height={50}
                            className="aspect-square w-[200px]"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Contact;
