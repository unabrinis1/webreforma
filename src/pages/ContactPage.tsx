import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const phoneNumber = "34651960371"; // Replace with actual phone number
  const message = encodeURIComponent("Hola los contacto por la web, estoy interesado/a en solicitar un presupuesto para una reforma. ¿Podrían darme más información? Gracias.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="pt-20">
      <div className="bg-primary-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-primary-200 max-w-3xl">
            Estamos aquí para ayudarte. Contáctanos y cuéntanos sobre tu proyecto.
          </p>
        </div>
      </div>

      <section className="section-container">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu espacio?</h2>
            <p className="text-xl text-primary-600 mb-8">
              Contacta con nosotros a través de WhatsApp para recibir un presupuesto personalizado.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xl px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Presupuesto por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
