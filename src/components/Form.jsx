import { PlusIcon } from '@heroicons/react/20/solid'
import { Configuration, OpenAIApi } from 'openai'

const people = [
  {
    name: 'Draw a gorilla in a forest on the boulder',
    user: 'luca',
    imageUrl: '',
  },
  {
    name: 'Courtney Henry',
    user: 'Designer',
    imageUrl: '',
  },
  {
    name: 'Tom Cook',
    user: 'Director, Product Development',
    imageUrl: '',
  },
  {
    name: 'Whitney Francis',
    user: 'Copywriter',
    imageUrl: '',
  },
  {
    name: 'Leonard Krasner',
    user: 'Senior Designer',
    imageUrl: '',
  },
  {
    name: 'Floyd Miles',
    user: 'Principal Designer',
    imageUrl: '',
  },
]

export default function Form() {

  const setFileUpload = () => {
    const file = this.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFile(reader.result)
    }
  }

  return (
    <div className="mx-auto max-w-md sm:max-w-3xl">
      <div>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            data-name="OpenAI Logo"
            width="30px"
            height="30px"
            viewBox="140 140 520 520"
          >
            <defs>
              <linearGradient id="linear" x1="100%" y1="22%" x2="0%" y2="78%">
                <stop offset="0%" stopColor="rgb(131,211,231)"></stop>
                <stop offset="2%" stopColor="rgb(127,203,229)"></stop>
                <stop offset="25%" stopColor="rgb(86,115,217)"></stop>
                <stop offset="49%" stopColor="rgb(105,80,190)"></stop>
                <stop offset="98%" stopColor="rgb(197,59,119)"></stop>
                <stop offset="100%" stopColor="rgb(197,59,119)"></stop>
              </linearGradient>
            </defs>
            <path
              id="logo"
              d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z"
              fill="var(--b100)"
            ></path>
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Start with a detailed description
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Sport, Food, Animal.....
          </p>
        </div>
        <form className="form mt-6 sm:flex sm:items-center">
          <label htmlFor="text" className="sr-only">
            Description of image (required)
          </label>
          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
            <input
              type="text"
              name="text"
              id="text"
              className="block w-full rounded-md border-gray-300 pr-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <button className="submit block w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Generate
            </button>
          </div>
        </form>
        <div className="m-3 text-center">
                  <span className="text-gray-600">
                    Or,{' '}
                    <button
                      type="button"
                      accept="image/*"
                      className="font-semibold text-indigo-600 focus:outline-none"
                      onClick={() => { setFileUpload } }
                    >upload an image</button>
                    <input type="file" accept="image/*" className='hidden'/>
                    {' '} to edit
                  </span>
                </div>
      </div>
      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">
          Recommended image descriptions
        </h3>
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1">
          {people.map((person, personIdx) => (
            <li key={personIdx}>
              <button
                type="button"
                className="group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="flex min-w-0 flex-1 items-center space-x-3">
                  <span className="block flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                  </span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-gray-900">
                      {person.name}
                    </span>
                    <span className="block truncate text-sm font-medium text-gray-500">
                      {person.user}
                    </span>
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <PlusIcon
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
