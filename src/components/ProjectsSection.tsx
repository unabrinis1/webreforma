import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projectCategories = ["Todos", "Baños", "Cocinas", "Salones", "Jardines", "Barbacoas"];

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Reforma integral de baño moderno",
    category: "Baños",
    image: "https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg",
    description: "Renovación completa con materiales premium y acabados elegantes."
  },
  {
    id: 2,
    title: "Cocina de estilo nórdico",
    category: "Cocinas",
    image: "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg",
    description: "Diseño funcional con isla central y acabados en madera clara."
  },
  {
    id: 3,
    title: "Salón contemporáneo",
    category: "Salones",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    description: "Espacio luminoso con paredes de acento y mobiliario personalizado."
  },
  {
    id: 4,
    title: "Jardín clasico",
    category: "Jardines",
    image:"/jardin2.jpg",
    description: "Paisajismo con plantas autóctonas y zonas de descanso."
  },
  {
    id: 5,
    title: "Baño de estilo spa",
    category: "Baños",
    image: "https://images.pexels.com/photos/6489118/pexels-photo-6489118.jpeg",
    description: "Reforma con ducha a ras de suelo y revestimientos naturales."
  },
  {
    id: 6,
    title: "Barbacoa de diseño con encimero y chimenea",
    category: "Barbacoas",
    image: "/bbq1.jpg",
    description: "Construcción de barbacoa a medida con zona de preparación y almacenamiento con puertas. Acabados en ladrillo, porcelana y encimera."
  }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  const filteredProjects = activeCategory === "Todos" 
    ? projects.slice(0, 6) 
    : projects.filter(project => project.category === activeCategory).slice(0, 6);

  return (
    <section className="section-container">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Proyectos Realizados</h2>
          <p className="section-subtitle mx-auto">
            Descubre algunas de nuestras reformas más destacadas y déjate inspirar para tu próximo proyecto.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {projectCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="image-card group">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-primary-200 mt-2">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/proyectos" className="btn btn-outline">
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;