import { About, Stats } from "../organisms";

export function AboutPage() {
  return (
    <div className="pt-22">

      <section
        className="relative min-h-[88vh] overflow-hidden bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(23,20,17,.96) 0%, rgba(23,20,17,.82) 38%, rgba(23,20,17,.45) 65%, rgba(23,20,17,.78) 100%),
            linear-gradient(to bottom, rgba(23,20,17,.15), rgba(42,37,32,.92)),
            url("https://images.unsplash.com/photo-1566073771259-6a8506099945")
          `,
        }}
      >

        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#C8A96B] uppercase tracking-[0.35em] text-sm">
                Sobre Nosotros
              </span>

              <div className="w-24 h-[1px] bg-[#C8A96B]" />
            </div>

            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.05] text-[#F2E7D0]">
              Una historia
              <br />
              construida con
              <br />
              <span className="italic text-[#C8A96B]">
                hospitalidad y confianza
              </span>
            </h1>

            <p className="mt-8 text-[#F2E7D0]/75 text-lg leading-8 max-w-2xl">
              Conoce nuestra historia, los valores que nos representan
              y el compromiso que tenemos para ofrecer experiencias
              memorables en cada estadÃƒÂ­a.
            </p>
          </div>
        </div>
      </section>
      <About />
    </div>
  );
}