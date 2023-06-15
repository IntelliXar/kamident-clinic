import React from 'react';

export default function Footer() {
  return (
      <footer className="bg-blue-100 w-[100%]">
        <div className="mx-auto px-0 pb-8">
          <h3 className='p-4 text-4xl text-center font-bold '>Contact</h3>
          <ul className="flex gap-10 align-center justify-center py-6 font-bold border-b border-gray-300">
            <li>
              Email: <a href="mailto:kamident@gmail.com">kamident@gmail.com</a>
            </li>
            <li>
              Phone: <a href="tel:+254706262436">0706262436</a>
            </li>
          </ul>

          <div className="location">
              <iframe
                className="bg-gray-200 w-full h-60"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kamident%20Dental%20Clinic,%20Thika%20Road,%20Ruiru+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
          </div>
        </div>
      </footer>
  );
}
