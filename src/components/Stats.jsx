export default function Stats() {
    return (
        <div className="bg-gray-50 pt-12 sm:pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Trusted by developers and artists all over the world
                    </h2>
                    <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                        Our API is used by thousands of developers and artist,
                        from small startups to big companies. We are proud to
                        have a different and inclusive community of users.
                    </p>
                </div>
            </div>
            <div className="mt-10 bg-white pb-12 sm:pb-16">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-gray-50" />
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        Trusted Companies
                                    </dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">
                                        230
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        API calls per months
                                    </dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">
                                        3.5K
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                        Countries used our API
                                    </dt>
                                    <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">
                                        34
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
