import testimonials from '@/pages/api/testimonials.json';

export default function Testimonials() {
  return (
    <section>
      <div className="slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.occupation}</p>
            <p>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
