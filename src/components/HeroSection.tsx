import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    title: "Transformamos tu hogar",
    subtitle: "Convierte tu casa en el espacio que siempre has soñado"
  },
  {
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    title: "Diseños personalizados",
    subtitle: "Creamos espacios únicos adaptados a tu estilo de vida"
  },
  {
    image: "https://images.pexels.com/photos/6489118/pexels-photo-6489118.jpeg",
    title: "Calidad garantizada",
    subtitle: "Materiales premium y acabados profesionales para tu tranquilidad"
  }
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={false}
        transitionTime={1000}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <div key={index} className="h-screen">
            <div 
              className="absolute inset-0 bg-center bg-cover"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-white animate-[fadeIn_0.5s_ease-in]">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center text-shadow animate-[fadeIn_0.7s_ease-in]">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_0.9s_ease-in]">
                <Link to="/contacto" className="btn btn-primary">
                  Solicitar Presupuesto
                </Link>
                <Link to="/proyectos" className="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                  Ver Proyectos
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;