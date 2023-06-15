import React, { useState } from 'react';
import testimonials from '@/pages/api/testimonials.json';

export default function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[slideIndex],
    testimonials[(slideIndex + 1) % testimonials.length],
    testimonials[(slideIndex + 2) % testimonials.length]
  ];

  return (
    <section className='mx-2 border-b border-gray-400'>
      <h2 className='text-center text-4xl font-bold m-6'>Testimonials</h2>
      <div className="slider grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial bg-blue-400 rounded-lg shadow p-6 transition-all duration-500">
            <div className="flex items-center mb-4">
              <img className="w-10 h-10 rounded-full mr-4" src={testimonial.image} alt="Profile" />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p>{testimonial.occupation}</p>
              </div>
            </div>
            <p>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
      <div className="text-right mt-4">
        <button
          className="text-5xl font-800 text-black px-2 pb-2 rounded-md"
          onClick={handleNextSlide}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}
