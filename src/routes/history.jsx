import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const products = [
    {
        id: 1,
        name: "Content: ",
        content: "blue and black car with a lamp",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1672808193504-a7e2d13acaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
        id: 1,
        name: "Content: ",
        content: "church in a dark background",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1673899241611-83a38805a016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
        id: 1,
        name: "Content: ",
        content: "mountain and a river",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1673903070027-ef7521c5c541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
        id: 1,
        name: "Content: ",
        content: "typical japanese road ",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1673950271048-a12ae839d36d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
]

export default function History() {
    return (
        <>
            <Navbar />
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900">
                        Your History:
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id}>
                                <div className="relative">
                                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="relative flex items-baseline gap-1 mt-4">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.content}
                                        </p>
                                    </div>
                                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                        />
                                        <p className="relative text-lg font-semibold text-white">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href={product.href}
                                        className="relative flex items-center justify-center rounded-md border border-transparent bg-red-100 py-2 px-8 text-sm font-medium text-red-600 transition-all hover:bg-red-200"
                                    >
                                        Remove
                                        <span className="sr-only">
                                            , {product.name}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
