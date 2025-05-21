import React from 'react';
import { Star } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type TestimonialProps = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

const testimonials: TestimonialProps[] = [
  {
    name: "María García",
    role: "Reforma de cocina",
    content: "Excelente trabajo en la reforma de nuestra cocina. El resultado final superó nuestras expectativas. Muy profesionales y puntuales en los plazos de entrega.",
    rating: 5
  },
  {
    name: "Juan Martínez",
    role: "Reforma integral",
    content: "Realizaron la reforma integral de nuestro piso y estamos encantados. Supieron captar exactamente lo que queríamos y nos asesoraron perfectamente.",
    rating: 5
  },
  {
    name: "Ana López",
    role: "Decoración de salón",
    content: "El servicio de decoración fue impecable. Transformaron nuestro salón en un espacio acogedor y moderno. Recomiendo totalmente sus servicios.",
    rating: 4
  },
  {
    name: "Carlos Rodríguez",
    role: "Reforma de baño",
    content: "Muy satisfecho con la reforma de nuestro baño. Trabajaron con rapidez y limpieza, y el resultado es espectacular. Sin duda repetiré.",
    rating: 5
  },
  {
    name: "David Hernandez",
    role: "Barbacoa de Obra",
    content: "Excelente trabajo en la Barbacoa, muy rápidos y la atención de Vanesa fue excelente, muy amable y atenta.",
    rating: 5
  },
  {
    name: "Mario Guerrero",
    role: "Barbacoa de Obra",
    content: "Inicie pidiendo una barbacoa y quede encantado, los he contratado para reformar otras partes de mi casa, 100% recomendados.",
    rating: 5
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mx-4 my-6 flex-1">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
    <p className="text-primary-700 italic mb-4">"{content}"</p>
    <div className="flex items-center">
      <div>
        <h4 className="font-medium text-primary-900">{name}</h4>
        <p className="text-sm text-primary-500">{role}</p>
      </div>
    </div>
  </div>
);

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const TestimonialsSection: React.FC = () => {
  const groups = chunkArray(testimonials, 3);

  return (
    <section className="section-container bg-beige-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
          transitionTime={800}
          showArrows={true}
          showIndicators={true}
          swipeable={true}
          emulateTouch={true}
          className="py-6"
        >
          {groups.map((group, idx) => (
            <div key={idx} className="flex flex-col md:flex-row justify-center">
              {group.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
