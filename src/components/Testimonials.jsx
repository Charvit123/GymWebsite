import { ImQuotesLeft } from 'react-icons/im';
import { useState } from 'react';
import SectionHead from './SectionHead';
import Card from '../UI/Card';
import { testimonials } from '../data';

function Testimonials() {
  const [index, setIndex] = useState(0);
  const {
    name, quote, job, avatar,
  } = testimonials[index];

  setIndex(0);

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__head" />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial_title">{job}</small>
        </Card>
      </div>
    </section>
  );
}

export default Testimonials;
