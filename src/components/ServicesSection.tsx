import React from 'react';
import { Bath, ChefHat, PenTool, TreePine, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="service-card flex flex-col items-center text-center group">
    <div className="mb-4 p-4 bg-accent-50 rounded-full text-accent-600 group-hover:text-accent-500 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-primary-600">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Reformas de Baños",
      description: "Transforma tu baño en un espacio moderno y funcional que refleje tu estilo personal. Disfruta de calidad superior en cada detalle y un diseño que perdura. ¡Descubre nuestros proyectos de baños!",
      icon: <Bath className="w-8 h-8" />
    },
    {
      title: "Reformas de Cocinas",
      description: "Diseñamos la cocina de tus sueños, un espacio que se adapta perfectamente a tu estilo de vida y facilita tus momentos. Reformas integrales con soluciones personalizadas para cada necesidad. ¡Pide tu presupuesto de cocina sin compromiso!",
      icon: <ChefHat className="w-8 h-8" />
    },
    {
      title: "Decoración",
      description: "Damos vida a tus espacios con asesoramiento profesional y soluciones de decoración personalizadas.",
      icon: <PenTool className="w-8 h-8" />
    },
    {
      title: "Jardinería",
      description: "Disfruta de un jardín siempre impecable y vibrante con nuestro servicio de mantenimiento especializado. Déjanos cuidar de tu oasis verde. ¡Contáctanos para el cuidado de tu jardín!",
      icon: <TreePine className="w-8 h-8" />
    },
    {
      title: "Barbacoas a Medida",
      description: "¿Sueñas con la parrillera perfecta para tus reuniones? Creamos diseños únicos y a medida en herrería. Calidad y durabilidad para tus espacios exteriores. ¡Solicita tu diseño de parrillera a medida!",
      icon: <Flame className="w-8 h-8" />
    }
  ];

  return (
    <section className="section-container bg-primary-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle mx-auto">
            Ofrecemos servicios integrales de reforma y decoración para convertir cualquier espacio en el hogar de tus sueños.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/servicios" className="btn btn-outline">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;