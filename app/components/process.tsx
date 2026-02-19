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
    <section className="mb-20 mt-10">
      <div className="text-center mb-2">
        <h3 className="font-serif text-3xl my-10 mb-15 md:text-5xl text-[#3e2b1c]">
          Proceso
        </h3>
      </div>
      <div className="grid md:grid-cols-4 gap-12 mb-10 md:gap-16">
        {steps.map((step, i) => (
          <div key={step.id} className="text-center relative">

            {i !== 0 && (
              <span className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2 h-20 w-px bg-[#b46a3c]/30" />
            )}

            <div className="font-serif opacity-80 mb-8 text-3xl text-[#3e2b1c] font-bold">
              {step.id.toString().padStart(2, "0")}
            </div>

            <h4 className="font-serif mb-4 text-3xl text-[#3e2b1c]">
              {step.title}
            </h4>

            <p className="mt-3 text-sm md:text-lg text-neutral-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
