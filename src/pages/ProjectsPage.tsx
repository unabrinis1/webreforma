import React, { useState } from 'react';

const projectCategories = ["Todos", "Baños", "Cocinas", "Salones", "Jardines", "Barbacoas", "Decoración"];

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  before?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Reforma integral de baño moderno",
    category: "Baños",
    image: "https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg",
    description: "Renovación completa con materiales premium y acabados elegantes. Incluye cambio de sanitarios, revestimientos y muebles a medida."
  },
  {
    id: 2,
    title: "Cocina de estilo nórdico",
    category: "Cocinas",
    image: "https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg",
    description: "Diseño funcional con isla central y acabados en madera clara. Electrodomésticos integrados y amplio espacio de almacenamiento."
  },
  {
    id: 3,
    title: "Salón contemporáneo",
    category: "Salones",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    description: "Espacio luminoso con paredes de acento y mobiliario personalizado. Reforma completa incluyendo suelos, iluminación y carpintería."
  },
  {
    id: 4,
    title: "Jardín clasico",
    category: "Jardines",
    image: "/jardin2.jpg",
    description: "Paisajismo con flores y mantenimiento de cesped."
  },
  {
    id: 5,
    title: "Baño de estilo spa",
    category: "Baños",
    image: "https://images.pexels.com/photos/6489118/pexels-photo-6489118.jpeg",
    description: "Reforma con ducha a ras de suelo y revestimientos naturales. Iluminación ambiental y acabados en piedra natural."
  },
  {
    id: 6,
    title: "Cocina abierta al salón",
    category: "Cocinas",
    image: "/cocina1.jpg",
    description: "Integración de espacios con isla multifuncional y zona de comedor. Distribución optimizada para maximizar la superficie útil."
  },
  {
    id: 7,
    title: "Decoración de dormitorio principal",
    category: "Decoración",
    image: "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg",
    description: "Renovación completa del espacio con nuevos textiles, iluminación y elementos decorativos personalizados."
  },
  {
    id: 8,
    title: "Barbacoa exterior de obra",
    category: "Barbacoas",
    image: "/bbq1.jpg",
    description: "Construcción de barbacoa a medida con zona de preparación y almacenamiento con puertas. Acabados en ladrillo, porcelana y encimera."
  },
  {
    id: 9,
    title: "Reforma de salón minimalista",
    category: "Salones",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
    description: "Diseño limpio y funcional con mobiliario de líneas simples. Paleta de colores neutros y detalles en madera natural."
  },
  {
    id: 10,
    title: "Jardín exterior ",
    category: "Jardines",
    image: "/jardin1.jpeg",
    description: "Creación de formas en arbustos, mantenimiento de cesped , riego automatico y iluminación led."
  },
  {
    id: 11,
    title: "Baño rústico renovado",
    category: "Baños",
    image: "https://images.pexels.com/photos/6032425/pexels-photo-6032425.jpeg",
    description: "Combinación de elementos tradicionales con toques modernos. Bañera exenta y doble lavabo sobre mueble de madera natural."
  },
  {
    id: 12,
    title: "Cocina industrial",
    category: "Cocinas",
    image: "https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg",
    description: "Estilo urbano con acabados en acero y madera. Amplia encimera de trabajo y estanterías abiertas para almacenamiento."
  }
];

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      <div className="bg-primary-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Proyectos</h1>
          <p className="text-xl text-primary-200 max-w-3xl">
            Descubre algunas de nuestras reformas más destacadas y déjate inspirar para tu próximo proyecto.
          </p>
        </div>
      </div>

      <section className="section-container">
        <div className="container">
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
              <div 
                key={project.id} 
                className="image-card group cursor-pointer"
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-primary-200 mt-2 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-primary-600">No hay proyectos en esta categoría actualmente.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-primary-900">{selectedProject.title}</h2>
                <button 
                  onClick={closeProjectDetails}
                  className="text-primary-500 hover:text-primary-700 text-xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-primary-900">Descripción</h3>
                <p className="text-primary-700">{selectedProject.description}</p>
              </div>
              
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">
                  {selectedProject.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;