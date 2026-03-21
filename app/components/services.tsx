import { ServicesType } from "../types/services";

export default function Services({ services }: { services: ServicesType[] }) {
  return (
    <section>

      {/* Header — mismo patrón que Proyectos destacados */}
      <div className="mb-14 md:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-8 bg-[#b46a3c]/50" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
            Qué hacemos
          </span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#2a1f15]">
          Servicios
        </h3>
      </div>

      {/* Grid de servicios */}
      <div className="grid md:grid-cols-3 gap-10 md:gap-0">
        {services.map((service, i) => (
          <div key={service.id} className="relative md:px-10 lg:px-14">

            {/* Divisor vertical entre columnas */}
            {i !== 0 && (
              <span className="hidden md:block absolute left-0 top-0 h-full w-px bg-[#b46a3c]/15" />
            )}

            {/* Número decorativo */}
            <span className="font-serif text-[#b46a3c]/20 text-6xl leading-none select-none">
              {(i + 1).toString().padStart(2, "0")}
            </span>

            <h4 className="font-serif mt-4 mb-4 text-xl md:text-2xl text-[#2a1f15] tracking-tight">
              {service.serviceName}
            </h4>

            <div className="w-6 h-px bg-[#b46a3c]/40 mb-4" />

            <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
              {service.Description}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}