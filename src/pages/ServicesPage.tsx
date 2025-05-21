import React from 'react';
import { Bath, ChefHat, Home, TreePine, Flame, PenTool } from 'lucide-react';

type ServiceDetailsProps = {
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
};

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ title, description, features, image, reverse = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
      <h3 className="text-2xl font-bold mb-4 text-primary-900">{title}</h3>
      <p className="text-primary-700 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-500 font-bold mr-2">•</span>
            <span className="text-primary-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
      <div className="image-card aspect-video">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Reformas de Baños",
      description: "Transformamos tu baño en un espacio moderno y funcional con materiales de alta calidad y acabados impecables. Nos adaptamos a cualquier tamaño y estilo para crear el baño de tus sueños.",
      features: [
        "Instalación y renovación completa de sanitarios",
        "Cambio de revestimientos (suelos y paredes)",
        "Instalación de platos de ducha a medida",
        "Muebles de baño personalizados",
        "Iluminación y accesorios"
      ],
      image: "/baño3.png",
      icon: <Bath className="w-8 h-8" />
    },
    {
      title: "Reformas de Cocinas",
      description: "Diseñamos y construimos cocinas funcionales y estéticas que se adaptan a tu estilo de vida. Combinamos materiales duraderos con las últimas tendencias en diseño para crear cocinas prácticas y elegantes.",
      features: [
        "Diseño 3D personalizado",
        "Instalación de muebles a medida",
        "Encimeras de diversos materiales",
        "Electrodomésticos integrados",
        "Iluminación técnica y decorativa"
      ],
      image: "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg",
      icon: <ChefHat className="w-8 h-8" />
    },
    {
      title: "Reformas Integrales",
      description: "Renovamos completamente tu hogar para adaptarlo a tus necesidades actuales. Desde la distribución de espacios hasta los acabados finales, nos encargamos de todo el proceso de transformación.",
      features: [
        "Derribos y construcción de tabiques",
        "Instalaciones eléctricas y de fontanería",
        "Renovación de suelos y revestimientos",
        "Carpintería interior y exterior",
        "Pintura y acabados"
      ],
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      icon: <Home className="w-8 h-8" />
    },
    {
      title: "Jardinería",
      description: "Diseñamos, creamos y mantenemos jardines que transforman tu espacio exterior en un oasis de tranquilidad y belleza. Trabajamos con plantas adaptadas al clima mediterráneo para garantizar su durabilidad.",
      features: [
        "Diseño paisajístico personalizado",
        "Instalación de sistemas de riego eficientes",
        "Plantación de árboles, arbustos y plantas",
        "Instalación de césped natural o artificial",
        "Creación de caminos y zonas de descanso"
      ],
      image: "/jardin1.jpeg",
      icon: <TreePine className="w-8 h-8" />
    },
    {
      title: "Barbacoas a Medida",
      description: "Diseñamos y construimos barbacoas personalizadas que se integran perfectamente en tu jardín o terraza. Utilizamos materiales de alta calidad para garantizar su durabilidad y funcionalidad.",
      features: [
        "Barbacoas de obra a medida",
        "Diferentes materiales: ladrillo, piedra, acero",
        "Zonas de preparación y almacenamiento",
        "Hornos de leña complementarios",
        "Acabados resistentes a la intemperie"
      ],
      image: "/bbq1.jpg",
      icon: <Flame className="w-8 h-8" />
    },
    {
      title: "Decoración",
      description: "Transformamos cualquier espacio con nuestro servicio de decoración profesional. Creamos ambientes armoniosos y personalizados que reflejan tu estilo y personalidad.",
      features: [
        "Asesoramiento en selección de colores y materiales",
        "Elección de mobiliario y accesorios",
        "Diseño de iluminación ambiental",
        "Textiles y complementos",
        "Elementos decorativos personalizados"
      ],
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      icon: <PenTool className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-primary-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-primary-200 max-w-3xl">
            Ofrecemos soluciones integrales para transformar cualquier espacio de tu hogar.
            Calidad, profesionalidad y atención personalizada en cada proyecto.
          </p>
        </div>
      </div>

      <section className="section-container">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="service-card flex flex-col items-center text-center group">
                <div className="mb-4 p-4 bg-accent-50 rounded-full text-accent-600 group-hover:text-accent-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-primary-600">{service.description.split('.')[0] + '.'}</p>
              </div>
            ))}
          </div>

          {services.map((service, index) => (
            <ServiceDetails
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>

      <section className="section-container bg-beige-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Proceso de Trabajo</h2>
            <p className="section-subtitle mx-auto">
              Nuestro método garantiza resultados excepcionales y una experiencia sin complicaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consulta Inicial",
                description: "Escuchamos tus ideas y necesidades para entender tu visión del proyecto."
              },
              {
                number: "02",
                title: "Diseño y Presupuesto",
                description: "Creamos una propuesta personalizada y un presupuesto detallado."
              },
              {
                number: "03",
                title: "Ejecución",
                description: "Nuestro equipo profesional realiza el trabajo con precisión y excelencia."
              },
              {
                number: "04",
                title: "Entrega",
                description: "Revisamos juntos el resultado final para asegurar tu completa satisfacción."
              }
            ].map((step, index) => (
              <div key={index} className="service-card">
                <div className="text-3xl font-bold text-accent-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-primary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;