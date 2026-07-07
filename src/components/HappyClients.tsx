const clients = [
  "Technicolor",
  "Difuze",
  "Engagedly",
  "Handpick 3D",
  "Cloudnine",
  "Vitech",
  "Mindtickle",
  "Nowfloats",
  "Zykrr",
  "Skillenza",
  "Fyle",
  "Zoomcar",
];

const HappyClients = () => {
  return (
    <section aria-labelledby="happy-clients-heading" className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
            Trusted by teams worldwide
          </p>
          <h2 id="happy-clients-heading" className="text-3xl md:text-4xl font-semibold">
            Our happy clients.
          </h2>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {clients.map((name) => (
            <li
              key={name}
              className="flex items-center justify-center min-h-[72px] rounded-2xl border border-border bg-secondary/60 text-foreground/70 text-sm font-medium tracking-tight transition-colors hover:text-foreground hover:border-primary/40"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HappyClients;
