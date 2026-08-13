import { FaWhatsapp } from "react-icons/fa";

const occasions = [
  {
    name: "Independence Day",
    description:
      "Patriotic products and celebration essentials for Independence Day.",
    image: "/images/independence-day.jpg",
  },
  {
    name: "Janmashtami Collection",
    description:
      "Special festive products and celebration essentials available around Janmashtami.",
    image: "/images/janmashtami.jpg",
  },
  {
    name: "Diwali Collection",
    description:
      "Festive essentials and celebration products available during the Diwali season.",
    image: "/images/diwali.jpg",
  },
  {
    name: "Seasonal Essentials",
    description:
      "A changing selection of useful products for festivals, celebrations and special occasions.",
    image: "/images/festival-essentials.jpg",
  },
];

function FestiveSeasonal() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#29231f]">

      {/* HERO */}
      <section className="px-6 pb-14 pt-12 lg:px-10 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-7xl">

          <a
            href="/"
            className="inline-flex items-center text-sm font-semibold text-[#b46b3c] transition-colors hover:text-[#29231f]"
          >
            ← Back to Collection
          </a>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

            {/* INTRO */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
                Festive & Seasonal
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Something Special
                <span className="block text-[#b46b3c]">
                  For Every Occasion.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b625b]">
                Explore special products and seasonal essentials available
                throughout the year for festivals, celebrations and
                different occasions.
              </p>
            </div>

            {/* QUICK INFO */}
            <div className="rounded-3xl border border-[#eadfd2] bg-white p-6 shadow-sm">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b46b3c]">
                Seasonal Collection
              </p>

              <div className="mt-4 space-y-3 text-sm text-[#6b625b]">

                <div className="flex items-start gap-3">
                  <span>🪔</span>
                  <span>Festival-specific products</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>🎉</span>
                  <span>Celebration essentials</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>📅</span>
                  <span>Collection changes with the season</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>💬</span>
                  <span>Ask about current availability</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* OCCASION COLLECTION */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b46b3c]">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Festival & Seasonal Collection
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6b625b]">
              Our seasonal selection changes throughout the year.
              Ask us about the products currently available in store.
            </p>
          </div>


          {/* CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {occasions.map((occasion) => (
              <article
                key={occasion.name}
                className="group overflow-hidden rounded-3xl border border-[#eadfd2] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="overflow-hidden bg-[#eadfd2]">
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>


                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-lg font-semibold leading-snug">
                    {occasion.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6b625b]">
                    {occasion.description}
                  </p>

                  <div className="pt-5">

                    <a
                      href={`https://wa.me/916392964128?text=${encodeURIComponent(
                        `Hi Dileep Book Store, I'm interested in the ${occasion.name}. Please share what is currently available and the details.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#29231f] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b46b3c] active:scale-95"
                    >
                      <FaWhatsapp className="text-base" />
                      Ask What's Available
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* SEASONAL CTA */}
      <section className="border-t border-[#eadfd2] bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
            Collection Changes With The Season
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Looking For Something Specific?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6b625b]">
            If you are looking for products for a particular festival
            or occasion, message us on WhatsApp and ask about current
            availability.
          </p>

          <a
            href="https://wa.me/916392964128?text=Hi%20Dileep%20Book%20Store%2C%20I%27d%20like%20to%20know%20what%20festive%20and%20seasonal%20products%20are%20currently%20available."
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#29231f] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#b46b3c] active:scale-95"
          >
            <FaWhatsapp className="text-lg" />
            Ask What's Available
          </a>

        </div>
      </section>

    </main>
  );
}

export default FestiveSeasonal;