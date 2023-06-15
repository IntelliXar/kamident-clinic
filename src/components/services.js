import { useState } from 'react';
import services from '@/pages/api/services.json';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }
  return (
    <section className='border-y border-gray-400 p-6'>
      <h2 className='text-center text-4xl font-bold mt-6'>Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 lg:mx-6">
        {services.map((service) => (
          <div key={service.id} className="bg-blue-300 p-4 shadow-md rounded-lg p-8 m-4">
            <img src={service.image} alt={service.title} className="w-full h-48 object-contain mb-4 rounded-lg" />
            <h3 className="text-xl font-bold ">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.shortDescription}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => handleLearnMore(service)}
            >
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <div className="bg-white rounded-lg w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
            <p className="text-gray-600 mb-8">{selectedService.longDescription}</p>
            <button
              className="absolute top-8 right-8 mt-4 mr-4 bg-white rounded-full p-2 hover:bg-gray-500"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
  
}
