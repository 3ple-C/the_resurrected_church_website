import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import arrow from '../assets/images/gridicons_dropdown (2).png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownFooter() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-normal font-medium text-white">
          E-Church
          <img src={arrow} alt='logo' className='object-cover inline ps-0.5' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-[-4] z-10 py-4 mt-2 w-72 origin-top-left bg-black shadow-xl focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/abot"
                  className={classNames(
                    active ? 'text-decoration-line decoration-white text-white' : 'text-white ',
                    'block px-6 py-2 text-sm font-medium'
                  )}
                >
                  Membership Registration
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/abot"
                  className={classNames(
                    active ? 'text-underline text-white' : 'text-white ',
                    'block px-6 py-2 text-sm font-medium'
                  )}
                >
                  Prayer Request
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/abot"
                  className={classNames(
                    active ? 'text-underline text-white' : 'text-white ',
                    'block px-6 py-2 text-sm font-medium'
                  )}
                >
                  Testimony
                </a>
              )}
            </Menu.Item>
            {/* <form method="POST" action="/abot">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'text-underline text-white' : 'text-white ',
                      'block w-full px-4 py-2 text-left text-sm font-medium'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
