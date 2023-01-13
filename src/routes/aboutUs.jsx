import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const people = [
    {
        name: "Luca Protelli",
        role: "Full-Stack Developer",
        imageUrl:
            "https://images.unsplash.com/photo-1588167056547-c183313da47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80",
        githubUrl: "https://github.com/lucaprotelli",
        twitterUrl: "https://twitter.com/protelli_luca",
    },
    {
        name: "Filippo Baldi",
        role: "Front-end Developer",
        imageUrl:
            "https://images.unsplash.com/photo-1606321924891-1c35bf74e288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80",
        githubUrl: "https://github.com/BaldiFilippo",
        twitterUrl: "https://twitter.com/baldifilippo_",
    },
    {
        name: "Filippo Paderno",
        role: "Marketing Manager",
        imageUrl:
            "https://images.unsplash.com/photo-1525414097223-503d44b5244e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        githubUrl: "https://github.com/FilippoPaderno",
        twitterUrl: "https://twitter.com/FilippoPaderno",
    },
]

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="bg-white">
                <div className=" mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Our Team
                            </h2>
                            <p className="text-xl text-gray-500">
                                We are a team of 3 people, all of us are
                                students at the IIS Benedetto Castelli in
                                Brescia.
                            </p>
                        </div>
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                        >
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2">
                                            <img
                                                className="rounded-lg object-cover shadow-lg"
                                                src={person.imageUrl}
                                                alt=""
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="space-y-1 text-lg font-medium leading-6">
                                                <h3>{person.name}</h3>
                                                <p className="text-indigo-600">
                                                    {person.role}
                                                </p>
                                            </div>
                                            <ul
                                                role="list"
                                                className="flex space-x-5"
                                            >
                                                <li>
                                                    <a
                                                        href={person.twitterUrl}
                                                        className="text-gray-400 hover:text-gray-500"
                                                    >
                                                        <span className="sr-only">
                                                            Twitter
                                                        </span>
                                                        <svg
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={person.githubUrl}
                                                        className="text-gray-400 hover:text-gray-500"
                                                    >
                                                        <span className="sr-only">
                                                            Github
                                                        </span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                clipRule="evenodd"
                                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                                fillRule="evenodd"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
