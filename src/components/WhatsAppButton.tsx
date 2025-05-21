import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "34651960371"; // Replace with actual phone number
  const message = encodeURIComponent(
    "Hola los contacto por la web, estoy interesado/a en solicitar un presupuesto para una reforma. ¿Podrían darme más información? Gracias."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50 
        bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full shadow-lg 
        flex items-center justify-center gap-2
        transition-all duration-300 
        animate-bounce
      "
    >
      <MessageCircle className="w-6 h-6" />
      <span className="whitespace-nowrap font-medium">
        Escríbenos al WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
