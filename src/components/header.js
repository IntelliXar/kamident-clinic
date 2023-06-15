import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <section className='border-b border-gray-400'>
      <header className="sticky top-0 bg-blue-300 bg-opacity-90 text-black">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center px-4 py-2">
          <img class= "w-[100px]" src="logo/mainlogo.png" alt="Kamident logo" />
          <nav>
            <ul className="flex gap-4 md:gap-8 space-x-4 md:space-x-8">
              <li>
                Services
              </li>
              <li>
                Blog
              </li>
              <li>
                Write To Us
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}
