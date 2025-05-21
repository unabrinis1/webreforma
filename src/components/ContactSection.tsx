import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="section-container">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle mx-auto">
            Estamos a tu disposición para ayudarte con tu próximo proyecto de reforma.
          </p>
        </div>

        {/* Contenido estirado */}
        <div className="grid grid-cols-1 gap-12 justify-items-stretch">
          <div className="w-full">
            <div className="bg-primary-900 text-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold mb-6 text-white">Información de Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-accent-500 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-primary-300">+34 651 960 371</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-accent-500 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">Correo Electrónico</p>
                    <p className="text-primary-300">info@arquidecogarden.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent-500 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-primary-300">Manzanares el Real, Madrid, España</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-accent-500 mt-1 mr-4" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-primary-300">Lunes a Dommingo: 9:00 - 23:00</p>
              
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-primary-900">Zona de Servicio</h3>
              <p className="text-primary-700 mb-4">
                Ofrecemos nuestros servicios en Madrid y alrededores, incluyendo:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-primary-700">
                <li>• Servicio para toda la comunidad de Madrid</li>
                
              </ul>
              <p className="text-primary-700 mt-4">
                Para otras ubicaciones, por favor contáctanos para consultar disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;