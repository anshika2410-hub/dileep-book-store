import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    name: "School & Academic Books",
    description:
      "Books and study material for different classes, subjects and academic needs.",
    image: "/images/academic-books.jpg",
  },
  {
    name: "Notebooks & Registers",
    description:
      "Notebooks, registers and writing essentials for school, college and everyday use.",
    image: "/images/notebooks.jpg",
  },
  {
    name: "Pens & Writing Supplies",
    description:
      "Pens, pencils and everyday writing supplies for study, school and work.",
    image: "/images/writing-supplies.jpg",
  },
  {
    name: "Art & Craft Supplies",
    description:
      "Colours, drawing materials and craft essentials for projects and creative activities.",
    image: "/images/art-craft.jpg",
  },
  {
    name: "School Stationery",
    description:
      "Useful stationery and everyday school supplies for students.",
    image: "/images/school-stationery.jpg",
  },
 {
  name: "Indoor Games",
  description:
    "Carrom and other indoor games for family time, leisure and everyday entertainment.",
  image: "/images/indoor-games.jpg",
},
];

function BooksStationery() {
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
                Books & Stationery
              </p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Everything You Need
                <span className="block text-[#b46b3c]">
                  for School & Study.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b625b]">
                From academic books and notebooks to writing supplies,
                art materials and everyday stationery, explore useful
                essentials available at Dileep Book Store.
              </p>
            </div>

            {/* QUICK INFO */}
            <div className="rounded-3xl border border-[#eadfd2] bg-white p-6 shadow-sm">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b46b3c]">
                At Dileep Book Store
              </p>

              <div className="mt-4 space-y-3 text-sm text-[#6b625b]">

                <div className="flex items-start gap-3">
                  <span>📚</span>
                  <span>Books & study material</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>✏️</span>
                  <span>Everyday stationery essentials</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>🎨</span>
                  <span>Art & craft supplies</span>
                </div>

                <div className="flex items-start gap-3">
                  <span>💬</span>
                  <span>Enquire directly on WhatsApp</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b46b3c]">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Books & Stationery Collection
            </h2>
          </div>


          {/* PRODUCT GRID */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

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
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>


                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-lg font-semibold leading-snug">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6b625b]">
                    {product.description}
                  </p>

                  <div className="pt-5">

                    <a
                      href={`https://wa.me/916392964128?text=${encodeURIComponent(
                        `Hi Dileep Book Store, I'm looking for items from the ${product.name} collection. Please share the available options and current prices.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#29231f] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#b46b3c] active:scale-95"
                    >
                      <FaWhatsapp className="text-base" />
                      Ask About This Category
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ENQUIRY CTA */}
      <section className="border-t border-[#eadfd2] bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
            Can't Find What You Need?
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Ask Us About Availability
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6b625b]">
            Looking for a particular book, stationery item or study
            essential? Send us a WhatsApp message and ask about
            current availability.
          </p>

          <a
            href="https://wa.me/916392964128?text=Hi%20Dileep%20Book%20Store%2C%20I%27m%20looking%20for%20a%20specific%20book%20or%20stationery%20item.%20Please%20help%20me%20with%20availability."
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

export default BooksStationery;