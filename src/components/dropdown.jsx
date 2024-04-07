import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import arrow from '../assets/images/gridicons_dropdown.png'

import {Link} from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex w-full justify-center item-center gap-x-1.5 rounded-md text-base font-medium text-black">
          <span>E-Church</span>
          <img src={arrow} alt='logo' className='object- ps-0.5' />
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
        <Menu.Items className="absolute z-10 py-4 mt-2 w-72 bg-white shadow-xl focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/member'
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-black ',
                    'block px-6 py-2 text-sm font-medium'
                  )}
                >
                  Membership Registration
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/prayer'
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-black ',
                    'block px-6 py-2 text-sm font-medium'
                  )}
                >
                  Prayer Request
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/testimony'
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-black ',
                    'block px-6 py-2 text-sm font-medium'
                  )}
                >
                  Testimony
                </Link>
              )}
            </Menu.Item>
            {/* <form method="POST" action="/abot">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-black' : 'text-black ',
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
