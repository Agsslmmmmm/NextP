import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaInstagram, FaGithub } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Specification', href: '#specification', current: false },
  { name: 'Projects', href: '#project', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>

      <div className="min-h-full">
        <Disclosure as="nav" className="bg-transparent fixed w-full z-50 backdrop-blur-xl">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className='text-lg font-bold text-gray-600'>Ags<span className='text-blue-600'>slmm</span></span>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? ' text-gray-600'
                                : '  text-gray-600',
                              'hover:tracking-widest transition-all duration-500 px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6 space-x-2">
                      <a href="https://www.instagram.com/agsslmmm_/" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500 space-x-4">
                        <FaInstagram size={30} className='hover:scale-110 transition-all duration-500' />
                      </a>
                      <a href="https://github.com/Agsslmmmmm" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500 space-x-4">
                        <FaGithub size={30} className='hover:scale-110 transition-all duration-500' />
                      </a>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  p-2  text-gray-600 focus:outline-none focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? ' text-gray-600' : '  text-gray-600',
                        'block rounded-md px-3 py-2 text-base font-medium hover:tracking-widest transition-all duration-500'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className=" pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="space-x-2 flex items-center md:ml-6">
                      <a href="https://www.instagram.com/agsslmmm_/" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500 space-x-4">
                        <FaInstagram size={30} className='hover:scale-110 transition-all duration-500' />
                      </a>
                      <a href="https://github.com/Agsslmmmmm" className="text-sm font-semibold leading-6 text-gray-600 hover:tracking-widest transition-all duration-500 space-x-4">
                        <FaGithub size={30} className='hover:scale-110 transition-all duration-500' />
                      </a>
                    </div>
                    <div className="ml-3">

                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


      </div>
    </>
  )
}
