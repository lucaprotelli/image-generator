/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Hero from './components/Hero'

const navigation = [
  { name: 'History', href: '#' },
  { name: 'Collections', href: '#' },
  { name: 'Documentation', href: '#' },
  { name: 'Contact us', href: '#' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return <Hero />
}
