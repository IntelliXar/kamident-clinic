import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-white-500 text-black my-[80px] px-4 text-center border-b border-gray-300">
      <p className="text-md">Dental Care that changes your life and leaves you smiling.</p>
      <p className="text-md">EXPECT SIMPLY THE BEST.</p>
      <div className="mt-4 mb-6 pb-6">
      <button className="bg-white text-black font-bold py-1 px-2 mr-4 rounded border-black border hover:bg-black hover:text-white hover:border-white transition duration-500 ease-in-out">
        <a href="tel:+254706262436">Book Now On Call</a>
      </button>

        <button className="bg-black text-white font-bold py-1 px-2 rounded border-white border hover:bg-white hover:text-black hover:border-black transition duration-500 ease-in-out">
        <a href="mailto:kamident@gmail.com">Book On Email</a>
        </button>
      </div>
      <hr />
    </section>
  );
}
