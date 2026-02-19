import { ServicesType } from "../types/services";

export default function Services({ services }: { services: ServicesType[] }) {
  return (
    <section>
      <div className="text-center mb-2">
        <h3 className="font-serif text-3xl my-10 mb-15 md:text-5xl text-[#3e2b1c]">
          Servicios
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-12 mb-10 md:gap-16">
        {services.map((service, i) => (
          <div key={service.id} className="text-center relative">

            {i !== 0 && (
              <span className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 h-20 w-px bg-[#b46a3c]/30" />
            )}

            <h4 className="font-serif mb-8 text-3xl text-[#3e2b1c]">
              {service.serviceName}
            </h4>

            <p className="mt-3 text-sm md:text-lg text-neutral-600 leading-relaxed">
              {service.Description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
