import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const navigation = [
    { name: "History", href: "history" },
    { name: "About", href: "aboutUs" },
    { name: "Documentation", href: "documentation" },
    { name: "Contacts", href: "contacts" },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="px-6 pt-6 lg:px-8">
            <div>
                <nav
                    className="flex h-9 items-center justify-between"
                    aria-label="Global"
                >
                    <div
                        className="flex lg:min-w-0 lg:flex-1"
                        aria-label="Global"
                    >
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <div className="flex items-center gap-2">
                                <svg
                                    data-name="OpenAI Logo"
                                    width="30px"
                                    height="30px"
                                    viewBox="140 140 520 520"
                                >
                                    <defs>
                                        <linearGradient
                                            id="linear"
                                            x1="100%"
                                            y1="22%"
                                            x2="0%"
                                            y2="78%"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="rgb(131,211,231)"
                                            ></stop>
                                            <stop
                                                offset="2%"
                                                stopColor="rgb(127,203,229)"
                                            ></stop>
                                            <stop
                                                offset="25%"
                                                stopColor="rgb(86,115,217)"
                                            ></stop>
                                            <stop
                                                offset="49%"
                                                stopColor="rgb(105,80,190)"
                                            ></stop>
                                            <stop
                                                offset="98%"
                                                stopColor="rgb(197,59,119)"
                                            ></stop>
                                            <stop
                                                offset="100%"
                                                stopColor="rgb(197,59,119)"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        id="logo"
                                        d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z"
                                        fill="var(--b100)"
                                    ></path>
                                </svg>
                                <span className="block rounded-md font-mono text-base font-bold text-gray-900 hover:bg-gray-50 ">
                                    OpenAI
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-semibold text-gray-900 hover:text-gray-900"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex min-w-0 flex-1 grow justify-end gap-3">
                        <a
                            href="login"
                            className="inline-block rounded-lg px-3 py-1.5 text-center text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                        >
                            Log in
                        </a>
                        <a
                            href="register"
                            className="inline-block rounded-lg border border-transparent bg-indigo-600 px-4 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign Up
                        </a>
                    </div>
                    <div className="flex min-w-0 justify-end lg:hidden ml-5">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
                <Dialog
                    as="div"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <Dialog.Panel
                        focus="true"
                        className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
                    >
                        <div className="flex h-9 items-center justify-between">
                            <div className="flex justify-start gap-3 items-center">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <svg
                                        class="mx-auto h-12 w-12 text-gray-400"
                                        data-name="OpenAI Logo"
                                        width="30px"
                                        height="30px"
                                        viewBox="140 140 520 520"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="linear"
                                                x1="100%"
                                                y1="22%"
                                                x2="0%"
                                                y2="78%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="rgb(131,211,231)"
                                                ></stop>
                                                <stop
                                                    offset="2%"
                                                    stopColor="rgb(127,203,229)"
                                                ></stop>
                                                <stop
                                                    offset="25%"
                                                    stopColor="rgb(86,115,217)"
                                                ></stop>
                                                <stop
                                                    offset="49%"
                                                    stopColor="rgb(105,80,190)"
                                                ></stop>
                                                <stop
                                                    offset="98%"
                                                    stopColor="rgb(197,59,119)"
                                                ></stop>
                                                <stop
                                                    offset="100%"
                                                    stopColor="rgb(197,59,119)"
                                                ></stop>
                                            </linearGradient>
                                        </defs>
                                        <path
                                            id="logo"
                                            d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z"
                                            fill="var(--b100)"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="block rounded-md font-mono text-base font-bold text-gray-900 hover:bg-gray-50"
                                >
                                    OpenAI
                                </a>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="mt-12 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    )
}
