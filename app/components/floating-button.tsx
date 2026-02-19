import { ContactData } from "../types/contact";
interface FloatingProps {
  contact: ContactData;
}

const FloatingButton = ({ contact }: FloatingProps) => {
  const message = "Hola, quisiera consultar sobre un proyecto.";


  const url = `https://wa.me/${contact.PhoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6 md:bottom-10 md:right-10
        z-50
        group
      "
    >
      <div
        className="
          flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16
          rounded-full
          
          bg-[#25D366]/80
          backdrop-blur-md
          border border-white/20
          
          shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          
          transition-all duration-300
          group-hover:scale-105
          group-hover:shadow-[0_10px_35px_rgba(0,0,0,0.35)]
        "
      >
        {/* Icono WhatsApp */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 md:w-8 md:h-8 fill-white"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.8-2l-.5-.3-4.8 1.3 1.3-4.7-.3-.5C3.6 20.6 3 18.3 3 16 3 9 9 3 16 3s13 6 13 13-6 12.8-13 12.8zm7.1-9.6c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.6-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6 0-.2-.9-2.1-1.3-2.9-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.6 4 6.4 5.4.9.3 1.6.5 2.1.6.9.1 1.7.1 2.3.1.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </div>
    </a>
  );
}

export default FloatingButton;