import { getContact } from "../libs/strapi/contact";

const pillars = [
  { num: "01", title: "Escucha", desc: "Entendemos tu forma de vivir antes de trazar cualquier línea." },
  { num: "02", title: "Precisión", desc: "Cada detalle está pensado para durar y para ser habitado con placer." },
  { num: "03", title: "Territorio", desc: "El paisaje no es el fondo, es parte del diseño desde el primer día." },
];

export default async function Contact() {
  const contact = await getContact();

  const name = `${contact.Name} ${contact.LastName}`;
  const phone = contact.PhoneNumber;
  const email = contact.Email;

  return (
    <div>
      <main className="min-h-screen pb-16 md:pb-0 flex flex-col items-center px-6 sm:px-8 md:px-12 xl:px-20 pt-28 md:pt-40 overflow-x-hidden bg-[#ede8e3]/40">

        {/* HEADER */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-8 bg-[#b46a3c]/50" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
              Hablemos
            </span>
          </div>
          <h1
            className="font-serif italic text-[#2a1f15] leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            Contacto
          </h1>
          <div className="mt-8 h-px w-full bg-[#b46a3c]/15" />
        </div>

        {/* GRID */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-14">

          {/* IZQUIERDA */}
          <div className="flex flex-col gap-14">

            <div className="flex items-start gap-5">
              <div className="w-px h-20 bg-[#b46a3c]/30 mt-1 shrink-0" />
              <p className="text-base md:text-lg font-light text-neutral-600 leading-relaxed">
                Cada proyecto comienza con una conversación. Contanos tu idea,
                el lugar que tenés en mente, o simplemente lo que soñás habitar.
                Estamos para escucharte y acompañarte desde el primer trazo
                hasta la obra terminada.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b46a3c]/60 font-light">
                  Arquitecto
                </span>
                <span className="font-serif text-2xl md:text-3xl italic text-[#2a1f15]">
                  {name}
                </span>
              </div>

              {/* TEL */}
              <div className="flex flex-col gap-2">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b46a3c]/60 font-light">
                  Teléfono
                </span>
                <a
                  href={`tel:${phone}`}
                  className="font-serif select-none text-2xl md:text-3xl italic text-[#2a1f15] hover:text-[#b46a3c] transition-colors duration-300 w-fit"
                >
                  {phone}
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b46a3c]/60 font-light">
                  Email
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-serif text-2xl select-none md:text-3xl italic text-[#2a1f15] hover:text-[#b46a3c] transition-colors duration-300 w-fit"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-[#b46a3c]/10">
              <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b46a3c]/60 font-light">
                Zona de trabajo
              </span>
              <p className="text-base font-light text-neutral-500 leading-relaxed">
                Patagonia y alrededores — trabajamos en toda la región
                con enfoque en arquitectura de paisaje y vivienda contemporánea.
              </p>
            </div>

          </div>

          {/* DERECHA */}
          <div className="flex flex-col gap-14">

            <div className="relative pl-2">
              <span className="font-serif text-[#b46a3c]/10 text-[7rem] leading-none select-none absolute -top-6 -left-2">
                "
              </span>
              <blockquote
                className="font-serif italic text-[#2a1f15] leading-[1.2] tracking-tight relative z-10"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
              >
                Diseñamos desde el territorio, con los materiales del lugar
                y la luz como herramienta principal.
              </blockquote>
            </div>

            <div className="flex flex-col">
              {pillars.map((item) => (
                <div
                  key={item.num}
                  className="group flex items-start gap-8 py-7 border-b border-[#b46a3c]/10 hover:border-[#b46a3c]/25 transition-colors duration-500"
                >
                  <span className="font-serif text-[#b46a3c]/20 text-4xl leading-none select-none shrink-0 pt-1">
                    {item.num}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span className="font-serif text-xl md:text-2xl italic text-[#2a1f15]">
                      {item.title}
                    </span>
                    <p className="text-sm md:text-base font-light text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="w-full max-w-7xl mx-auto my-24 md:mt-32">
          <div className="h-px w-full bg-[#b46a3c]/15 mb-14" />
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <p
              className="font-serif italic text-[#2a1f15] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              ¿Tenés un proyecto en mente?
            </p>

            <a
              href={`mailto:${email}`}
              className="border border-[#b46a3c] bg-[#b46a3c] text-white px-7 md:px-9 py-2.5 md:py-3 text-sm md:text-lg tracking-wide font-light w-fit cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.2,0.64,1)] hover:bg-[#f4f1ed] hover:text-[#b46a3c] hover:shadow-[0_0_20px_rgba(180,106,60,0.3)] active:scale-95 hover:scale-105">
              Escribinos
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}