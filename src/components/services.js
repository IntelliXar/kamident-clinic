import services from '@/pages/api/services.json';

export default function Services() {
  return (
    <section className='border-b border-gray-400 p-8'>
      <h2 className='text-center text-4xl font-bold mt-6'>Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
        {services.map((service) => (
          <div key={service.id} className="bg-blue-300 p-4 shadow-md rounded-lg p-8 m-6">
            <img src={service.image} alt={service.title} className="w-full h-48 object-contain mb-4 rounded-lg" />
            <h3 className="text-xl font-bold ">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.shortDescription}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mx-">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
