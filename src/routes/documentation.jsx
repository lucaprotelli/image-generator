import Navbar from '../components/Navbar'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What is an Al image generator?',
    answer:
      'An AI image generator is a computer program that creates images from scratch using artificial intelligence algorithms.',
  },
  {
    question: 'Where can you use it?',
    answer:
      'You can use Al image generators for various purposes, such as creating images for 3D models, advertising, generating images for blog posts, making art, etc.',
  },
  {
    question: 'What are the benefits of using an Al image generator?',
    answer:
      '1. AI image generators can produce high-quality art and realistic images much faster than humans. 2. They can help artists develop ideas for new works they need to do. For example, a concept artist can create many ideas for a video game in less than an hour. 3. Everyone can create images and artwork without having to know technical drawing skills.  4. Al image generators can quickly and easily generate large numbers of images, making them ideal for marketing applications.  5. A designer or artist will focus more on the concept and imagination of an image than on its technical aspects.',
  },
  {
    question: 'How does an Al image generator work?',
    answer:
      'The program uses a database of images to learn how to generate new ones. So once you type the text, the program makes a process, and based on the images in the database, it creates a new image.',
  },
  {
    question: 'What are the limitations of Al image generators?',
    answer:
      " AI image generators aren't always perfect at generating a specific image you want. For example, it is hard to get good results if you want to create an image with specific details. 2. AI image generators often rely on pre-trained models, so they're only as good as the data used to train them. For example, if the AI only trains on abstract pictures, it's hard to get a photorealistic one. 3. Image generators can sometimes produce results that look artificial. For example, getting accurate results for human faces is not easy.  4. Knowing what and how to write to the computer is necessary so that the text (prompts) will give us the desired results. Because of that, there are websites where you can buy texts (prompts) that work so that you don't have to do so much testing.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Documentation() {
  return (
    <>
      <Navbar />
      <CtaSection />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? '-rotate-180' : 'rotate-0',
                                'h-6 w-6 transform'
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
