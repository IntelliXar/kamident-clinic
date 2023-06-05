import services from '@/pages/api/services.json';

export default function Services() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.shortDescription}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
