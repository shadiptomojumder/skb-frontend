import Link from "next/link";

const Footer = () => {
    return (
        <main className="bg-white px-3 pt-16 sm:px-0">
            <div className="container mx-auto">
                <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <Link
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center">
                            <h1 className="text-3xl font-extrabold dark:text-primary">SKB BEST</h1>
                        </Link>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-gray-800 dark:text-gray-200">
                                At SKB BEST, we offer a curated selection of high-quality products
                                to meet all your lifestyle needs. From everyday essentials and
                                trendy apparel to unique gifts and home décor, our dedicated team is
                                committed to providing you with an exceptional shopping experience
                                and complete satisfaction.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm">
                        <p className="text-lg font-bold tracking-wide text-[#0C0C0C] dark:text-primary">
                            Contacts
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
                        <div className="flex items-center gap-1.5">
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
                                House 269,Mudafa ,Kholil market,Tongi,Gazipur
                            </a>
                        </div>
                    </div>

                    <div>
                        <span className="text-base font-bold tracking-wide text-gray-900 dark:text-primary">
                            Follow Us
                        </span>
                        <div className="mt-1 flex items-center space-x-3">
                            <div className="">
                                <a href="https://www.linkedin.com/company/growoly/" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 1536 1536">
                                        <path
                                            fill="currentColor"
                                            d="M1248 0q119 0 203.5 84.5T1536 288v960q0 119-84.5 203.5T1248 1536h-188V941h199l30-232h-229V561q0-56 23.5-84t91.5-28l122-1V241q-63-9-178-9q-136 0-217.5 80T820 538v171H620v232h200v595H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="https://www.facebook.com/growoly?mibextid=ZbWKwL"
                                    target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 1536 1536">
                                        <path
                                            fill="currentColor"
                                            d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279m108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65M768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5m768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="">
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 1536 1536">
                                        <path
                                            fill="currentColor"
                                            d="M237 1286h231V592H237zm246-908q-1-52-36-86t-93-34t-94.5 34t-36.5 86q0 51 35.5 85.5T351 498h1q59 0 95-34.5t36-85.5m585 908h231V888q0-154-73-233t-193-79q-136 0-209 117h2V592H595q3 66 0 694h231V898q0-38 7-56q15-35 45-59.5t74-24.5q116 0 116 157zm468-998v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="">
                                <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 1536 1536">
                                        <path
                                            fill="currentColor"
                                            d="M1280 482q-56 25-121 34q68-40 93-117q-65 38-134 51q-61-66-153-66q-87 0-148.5 61.5T755 594q0 29 5 48q-129-7-242-65T326 422q-29 50-29 106q0 114 91 175q-47-1-100-26v2q0 75 50 133.5T461 885q-29 8-51 8q-13 0-39-4q21 63 74.5 104t121.5 42q-116 90-261 90q-26 0-50-3q148 94 322 94q112 0 210-35.5t168-95t120.5-137t75-162T1176 618q0-18-1-27q63-45 105-109m256-194v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center border-t py-5">
                    <p className="text-xs font-semibold text-gray-600 sm:text-sm dark:text-primary">
                        © Copyright 2024. All rights reserved by Lalon Store.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Footer;
