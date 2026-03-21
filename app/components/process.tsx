export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Concepto",
      description: "Interpretación del lugar y las intenciones del cliente.",
    },
    {
      id: 2,
      title: "Anteproyecto",
      description: "Propuesta preliminar, flexible e iterativa con el cliente.",
    },
    {
      id: 3,
      title: "Proyecto ejecutivo",
      description: "Definición técnica del proyecto y la documentación final.",
    },
    {
      id: 4,
      title: "Dirección de obra",
      description: "Seguimiento y supervisión en obra del proyecto diseñado.",
    },
  ];

  return (
    <section>
      {/* Header — mismo patrón */}
      <div className="mb-14 md:mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-8 bg-[#b46a3c]/50" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#b46a3c]/70 font-light">
            Cómo trabajamos
          </span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#2a1f15]">
          Proceso
        </h3>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-10 md:gap-0">
        {steps.map((step, i) => (
          <div key={step.id} className="relative md:px-8 lg:px-10">

            {/* Divisor vertical */}
            {i !== 0 && (
              <span className="hidden md:block absolute left-0 top-0 h-full w-px bg-[#b46a3c]/15" />
            )}

            {/* Número grande */}
            <span className="font-serif text-[#b46a3c]/20 text-6xl leading-none select-none">
              {step.id.toString().padStart(2, "0")}
            </span>

            <h4 className="font-serif mt-4 mb-4 text-xl md:text-2xl text-[#2a1f15] tracking-tight">
              {step.title}
            </h4>

            <div className="w-6 h-px bg-[#b46a3c]/40 mb-4" />

            <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed">
              {step.description}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}