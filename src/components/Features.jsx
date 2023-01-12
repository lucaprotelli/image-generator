import {
    ArrowDownCircleIcon,
    ArrowPathIcon,
    BookmarkIcon,
    ChatBubbleBottomCenterTextIcon,
    CloudArrowUpIcon,
    CogIcon,
    ServerIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline"

const features = [
    {
        name: "Generate to save images",
        description: "The images will be saved in your account for later use.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "Save your favorite images",
        description: "You can save in a collection your favorite images.",
        icon: BookmarkIcon,
    },
    {
        name: "Regenerate Images",
        description:
            "If you write a different description will be regenerate a different set of image.",
        icon: ArrowPathIcon,
    },
    {
        name: "Secure Authentication",
        description: "We provide the best secure authentication for our users.",
        icon: ShieldCheckIcon,
    },
    {
        name: "API in beta",
        description:
            "During this time the API and models will evolve based on your feedback. To ensure all users can prototype comfortably, the default rate limit is 50 images per minute.",
        icon: CogIcon,
    },
    {
        name: "Best support for our community",
        description:
            "If you have any kind of problem you can contact us or read the FAQ section.",
        icon: ChatBubbleBottomCenterTextIcon,
    },
]

export default function Features() {
    return (
        <>
            <div className="relative bg-white py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                    <h2 className="text-lg font-semibold text-indigo-600">
                        Generate faster
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to generate your image
                    </p>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                        Creating images from scratch based on a text prompt
                    </p>
                    <div className="mt-20">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="pt-6">
                                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                        <div className="-mt-6">
                                            <div>
                                                <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                                                    <feature.icon
                                                        className="h-8 w-8 text-white"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </div>
                                            <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                                {feature.name}
                                            </h3>
                                            <p className="mt-5 text-base leading-7 text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
