import React from 'react';
import Link from 'next/link';
import TopBanner from './banner';

export default function Header() {
  return (
    <section className='border-b sticky top-0'>
      <TopBanner />
      <header className="bg-blue-300 bg-opacity-50 text-black px-14">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center px-4 py-2">
          <img class= "w-[100px]" src="logo/mainlogo.png" alt="Kamident logo" />
          <nav>
          <ul className="flex gap-4 md:gap-8 space-x-4 md:space-x-8">
              <li>
                <a href="#services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="" className="hover:underline">Blog</a>
              </li>
              <li>
                <a href="mailto:kamident@gmail.com" className="hover:underline">Write to Us</a>
              </li>
          </ul>

          </nav>
        </div>
      </header>
    </section>
  );
}
