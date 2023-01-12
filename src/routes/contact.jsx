import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="bg-white py-3 sm:py-8 md:py-20 lg:py-36">
                <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
                    <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                                Sales Support
                            </h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Nullam risus blandit ac aliquam justo ipsum.
                                    Quam mauris volutpat massa dictumst amet.
                                    Sapien tortor lacus arcu.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon
                                            className="h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+39 (392) 123 4567 </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        <EnvelopeIcon
                                            className="h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-0">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                                Technical Support
                            </h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Magni, repellat error
                                    corporis doloribus similique.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon
                                            className="h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+39 (392) 123 4567</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex">
                                    <div className="flex-shrink-0">
                                        <EnvelopeIcon
                                            className="h-6 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
