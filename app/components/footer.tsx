import { ContactData } from "../types/contact";

interface FooterProps {
  contact: ContactData;
}

const Footer = ({ contact }: FooterProps) => {
  return (
    <footer className="pt-12 border-t border-[#d8cfc6] bg-[#f4f1ed] text-[#3e2b1c]">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <h4 className="font-serif text-xl mb-4">Architect</h4>
            <p className="text-sm leading-relaxed text-neutral-600 max-w-xs">
              Estudio de arquitectura contemporánea enfocado en
              materialidad, luz y diálogo con el entorno.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h5 className="text-sm uppercase tracking-widest mb-4 text-neutral-500">
              Navegación
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:opacity-60 transition">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60 transition">
                  Estudio
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-60 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="text-sm uppercase tracking-widest mb-4 text-neutral-500">
              Contacto
            </h5>
            <ul className="space-y-3 text-sm select-none text-neutral-600">
              <li>{contact.Name + " " + contact.LastName}</li>
              <li>{contact.Email}</li>
              <li>{contact.PhoneNumber}</li>
              <li>Patagonia, Argentina</li>
            </ul>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-16 pt-8 border-t  border-[#e5ddd4] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Architect Studio</p>
          <p className="select-none">Diseño y desarrollo por gonnmerino@gmail.com.</p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;