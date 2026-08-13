import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    name: "Travel Bags",
    type: "Travel",
    description:
      "Practical travel bags with useful storage for holidays, trips and everyday journeys.",
    image: "/images/travel-bag.jpg",
  },
  {
    name: "Travel Backpacks",
    type: "Travel",
    description:
      "Comfortable backpacks for short trips, everyday travel and carrying personal essentials.",
    image: "/images/travel-backpack.jpg",
  },
  {
    name: "Trolley Bags",
    type: "Travel",
    description:
      "Convenient trolley bags available in different sizes and designs for comfortable travel.",
    image: "/images/trolley-bag.jpg",
  },
];

function TravelBags() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#29231f]">

      {/* HERO */}
      <section className="px-6 pb-14 pt-12 lg:px-10 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-7xl">

          <a
            href="/"
            className="inline-flex items-center text-sm font-semibold text-[#b46b3c] transition-colors hover:text-[#29231f]"
          >
            ← Back to Home
          </a>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

            {/* INTRO */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
                Travel Bags & Trolleys
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Pack Smart,
                <span className="block text-[#b46b3c]">
                  Travel Easy.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b625b]">
                Explore travel bags, backpacks and trolley options for
                holidays, short trips, family journeys and everyday travel.
              </p>

            </div>


            {/* QUICK INFO */}
            <div className="rounded-3xl border border-[#eadfd2] bg-white p-6 shadow-sm">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b46b3c]">
                Travel Collection
              </p>

              <div className="mt-4 space-y-3 text-sm text-[#6b625b]">

                <div className="flex items-start gap-3">
                  <span>🧳</span>
                  <span>Travel bags for different needs</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>🎒</span>
                  <span>Backpacks for easy travel</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>🧳</span>
                  <span>Trolley options in different sizes</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>💬</span>
                  <span>Check availability on WhatsApp</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* COLLECTION */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b46b3c]">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Travel Collection
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6b625b]">
              Browse our travel range and ask us about the designs,
              sizes and options currently available in store.
            </p>
          </div>


          {/* PRODUCT GRID */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-[#eadfd2] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="overflow-hidden bg-[#eadfd2]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>


                {/* CONTENT */}
                <div className="flex min-h-[245px] flex-col p-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b46b3c]">
                    {product.type}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-snug">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6b625b]">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-6">

                    <a
                      href={`https://wa.me/916392964128?text=${encodeURIComponent(
                        `Hi Dileep Book Store, I'm looking for items from the ${product.name} collection. Please share the available options, designs, sizes and current prices.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#29231f] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b46b3c] active:scale-95"
                    >
                      <FaWhatsapp className="text-lg" />
                      Ask About This Category
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* WHATSAPP CTA */}
      <section className="border-t border-[#eadfd2] bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
            Planning A Trip?
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Need Help Choosing a Travel Bag?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6b625b]">
            Tell us what you are looking for and ask about available
            sizes, designs and current prices.
          </p>

          <a
            href="https://wa.me/916392964128?text=Hi%20Dileep%20Book%20Store%2C%20I%27m%20looking%20for%20a%20travel%20bag%2C%20backpack%20or%20trolley.%20Please%20share%20available%20options."
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#29231f] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#b46b3c] active:scale-95"
          >
            <FaWhatsapp className="text-lg" />
            Ask on WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}

export default TravelBags;