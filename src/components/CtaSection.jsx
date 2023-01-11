export default function CtaSection() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-6 text-center lg:py-36 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block">
                        Start to read the documentation today.
                    </span>
                </h2>
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="https://beta.openai.com/docs/guides/images"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                        >
                            Read the docs
                        </a>
                    </div>
                    <div className="ml-3 inline-flex">
                        <a
                            href="https://beta.openai.com/overview"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
