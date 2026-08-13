import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import BooksStationery from "./pages/BooksStationery";
import { Routes, Route } from "react-router-dom";
import SchoolBags from "./pages/SchoolBags";
import TravelBags from "./pages/TravelBags";
import FestiveSeasonal from "./pages/FestiveSeasonal";
function HomePage()  {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#fffaf3] text-[#29231f]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#eadfd2] bg-[#fffaf3]/95 backdrop-blur">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* LOGO */}
          <a
            href="#home"
            className="text-xl font-bold tracking-[0.18em] text-[#29231f]"
          >
            DILEEP
            <span className="font-normal"> BOOK STORE</span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium transition-colors hover:text-[#b46b3c]"
            >
              Home
            </a>

           <a
  href="/#about"
  className="text-sm font-medium transition-colors hover:text-[#b46b3c]"
>
  About
</a>

            <a
              href="#collection"
              className="text-sm font-medium transition-colors hover:text-[#b46b3c]"
            >
              Collection
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#29231f] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#b46b3c]"
            >
              Contact Us
            </a>
          </div>

          {/* MOBILE BUTTON */}
         <button
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
  className="rounded-lg border border-[#d9cabc] px-3 py-2 text-lg md:hidden"
>
  {menuOpen ? "✕" : "☰"}
</button>
{menuOpen && (
  <div className="absolute left-0 right-0 top-full border-b border-[#eadfd2] bg-[#fffaf3] px-6 py-5 shadow-lg md:hidden">
    <div className="flex flex-col gap-4">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="text-sm font-medium hover:text-[#b46b3c]"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="text-sm font-medium hover:text-[#b46b3c]"
      >
        About
      </a>

      <a
        href="#collection"
        onClick={() => setMenuOpen(false)}
        className="text-sm font-medium hover:text-[#b46b3c]"
      >
        Collection
      </a>

      <a
        href="#seasonal"
        onClick={() => setMenuOpen(false)}
        className="text-sm font-medium hover:text-[#b46b3c]"
      >
        Seasonal
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="rounded-full bg-[#29231f] px-5 py-3 text-center text-sm font-medium text-white"
      >
        Contact Us
      </a>

    </div>
  </div>
)}
        </nav>
      </header>


      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* HERO TEXT */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
              Your Everyday Store
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              Everything You Need,
              <span className="block text-[#b46b3c]">
                All in One Place.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6b625b]">
              Discover books, stationery, school essentials, bags, travel
              accessories, gifts and seasonal collections at Dileep Book Store.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
<a 
  href="#collection" 
  className="rounded-full bg-[#29231f] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b46b3c] active:scale-95" 
>
  Explore Products
</a>

              <a
                href="#contact"
                className="rounded-full border border-[#cfc0b2] bg-white px-7 py-4 text-sm font-semibold text-[#29231f] transition-all duration-300 hover:-translate-y-1 hover:border-[#b46b3c] hover:text-[#b46b3c] active:scale-95"
              >
                Visit Our Store
              </a>

            </div>
          </div>


          {/* HERO VISUAL */}
          <div className="relative">

            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#ead5bd] blur-2xl" />

             <div className="group overflow-hidden rounded-3xl border border-[#eadfd2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1699443817739-cf2f7cbcd18d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBzaG9wfGVufDB8fDB8fHww"
                alt="Books and reading collection"
                className="h-[480px] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b46b3c]">
                  Dileep Book Store
                </p>

                <p className="mt-2 text-lg font-semibold">
                  Books • Stationery • Bags • Gifts
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>      
{/* FEATURED COLLECTION */}
<section
  id="collection"
  className="bg-[#fffaf3] px-6 py-24 lg:px-10"
>
  <div className="mx-auto max-w-7xl">

    {/* HEADING */}
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
          Featured Collection
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Popular Picks
        </h2>

        <p className="mt-5 text-base leading-7 text-[#6b625b]">
         From everyday stationery and school essentials to travel bags and seasonal products, discover a variety of useful products available at Dileep Book Store.
        </p>
      </div>

      <a
        href="#contact"
        className="text-sm font-semibold text-[#b46b3c] transition-colors hover:text-[#29231f]"
      >
        Enquire About Products →
      </a>
    </div>


    {/* PRODUCT GRID */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


      {/* BOOKS */}
      <div className="group overflow-hidden rounded-3xl border border-[#eadfd2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="overflow-hidden bg-[#f3eadf]">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85"
            alt="Books in a bookstore"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b46b3c]">
            Books & Stationery
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            Books & Study Essentials
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6b625b]">
            Books, notebooks, writing supplies and everyday study
            essentials.
          </p>

          <a
           href="/books-stationery"
            className="mt-5 inline-flex text-sm font-semibold text-[#29231f] transition-colors hover:text-[#b46b3c]"
          >
           Explore Collection →
          </a>
        </div>
      </div>


      {/* SCHOOL BAGS */}
      <div className="group overflow-hidden rounded-3xl border border-[#eadfd2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="overflow-hidden bg-[#f3eadf]">
          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85"
            alt="School backpack"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b46b3c]">
            School
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            School Backpacks
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6b625b]">
            Comfortable and practical school bags for students of
            different ages.
          </p>

          <a
            href="/school-bags"
            className="mt-5 inline-flex text-sm font-semibold text-[#29231f] transition-colors hover:text-[#b46b3c]"
          >
            Explore Collection →
          </a>
        </div>
      </div>


      {/* TRAVEL */}
      <div className="group overflow-hidden rounded-3xl border border-[#eadfd2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="overflow-hidden bg-[#f3eadf]">
         <img
  src="https://images.unsplash.com/photo-1639598003276-8a70fcaaad6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyb2xsZXlzfGVufDB8fDB8fHww"
  alt="Travel luggage and trolley bags"
  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
/>
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b46b3c]">
            Travel
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            Travel Bags & Trolleys
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6b625b]">
            Travel bags, backpacks and trolleys for school trips,
            holidays and everyday journeys.
          </p>

          <a
            href="/travel-bags"
            className="mt-5 inline-flex text-sm font-semibold text-[#29231f] transition-colors hover:text-[#b46b3c]"
          >
           Explore Collection →
          </a>
        </div>
      </div>


      {/* FESTIVE */}
      <div className="group overflow-hidden rounded-3xl border border-[#eadfd2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="overflow-hidden bg-[#f3eadf]">
          <img
            src="https://images.unsplash.com/photo-1629649052013-36f5712a4e99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Festive and seasonal collection"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b46b3c]">
            Seasonal
          </p>

          <h3 className="mt-2 text-lg font-semibold">
            Festive & Seasonal Collection
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6b625b]">
            Special products and essentials for festivals,
            celebrations and seasonal occasions.
          </p>

          <a
           href="/festive-seasonal"
            className="mt-5 inline-flex text-sm font-semibold text-[#29231f] transition-colors hover:text-[#b46b3c]"
          >
           Explore Collection →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* SEASONAL COLLECTION */}
<section
  id="seasonal"
  className="bg-[#29231f] px-6 py-24 text-white lg:px-10"
>
  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e2a875]">
        What's In Season
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
        Celebrations, Sorted.
      </h2>

      <p className="mt-5 text-base leading-7 text-[#d8cec6]">
        From school essentials to festive celebrations, discover
        special collections throughout the year.
      </p>
    </div>


    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* BACK TO SCHOOL */}
      <div className="group overflow-hidden rounded-3xl bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Back to school collection"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e2a875]">
            School Season
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Back to School
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#d8cec6]">
            Notebooks, stationery, school bags and everyday essentials.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex text-sm font-semibold text-white hover:text-[#e2a875]"
          >
            Explore →
          </a>
        </div>
      </div>


      {/* JANMASHTAMI */}
      <div className="group overflow-hidden rounded-3xl bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
        <div className="overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1691030658237-3aff3903f78a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGphbm1hc2h0YW1pJTIwY2xvdGhlcyUyMG9mJTIwZ29kfGVufDB8fDB8fHww"
            alt="Festive collection"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e2a875]">
            Festival
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Janmashtami
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#d8cec6]">
            Special festive items and celebration essentials.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex text-sm font-semibold text-white hover:text-[#e2a875]"
          >
            Explore →
          </a>
        </div>
      </div>


      {/* INDEPENDENCE DAY */}
      <div className="group overflow-hidden rounded-3xl bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=900&q=85"
            alt="Independence Day collection"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e2a875]">
            Celebration
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Independence Day
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#d8cec6]">
            Tricolour essentials, celebration items and accessories.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex text-sm font-semibold text-white hover:text-[#e2a875]"
          >
            Explore →
          </a>
        </div>
      </div>


      {/* DIWALI */}
      <div className="group overflow-hidden rounded-3xl bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1666244453401-43a8c15b5640?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpd2FsaSUyMGxpZ2h0fGVufDB8fDB8fHww"
            alt="Diwali festive collection"
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e2a875]">
            Festival
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Diwali
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#d8cec6]">
            Festive decorations, gifting essentials and celebration items.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex text-sm font-semibold text-white hover:text-[#e2a875]"
          >
            Explore →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* WHY SHOP WITH US */}
<section className="bg-white px-6 py-24 lg:px-10">
  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
        Why Dileep Book Store
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
        Your Everyday Store,
        <span className="block text-[#b46b3c]">
          All Under One Roof.
        </span>
      </h2>

      <p className="mt-5 text-base leading-7 text-[#6b625b]">
        From everyday stationery to school essentials, travel bags and
        seasonal collections, find what you need conveniently in one place.
      </p>
    </div>


    {/* FEATURES */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-[#eadfd2] bg-[#fffaf3] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ead5bd] text-xl">
          ✓
        </div>

        <h3 className="mt-5 text-lg font-semibold">
          Wide Product Range
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6b625b]">
          Books, stationery, bags, gifts and everyday essentials
          under one roof.
        </p>
      </div>


      <div className="rounded-3xl border border-[#eadfd2] bg-[#fffaf3] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ead5bd] text-xl">
          🎒
        </div>

        <h3 className="mt-5 text-lg font-semibold">
          School Essentials
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6b625b]">
          Everything students need for school, study and everyday
          learning.
        </p>
      </div>


      <div className="rounded-3xl border border-[#eadfd2] bg-[#fffaf3] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ead5bd] text-xl">
          🧳
        </div>

        <h3 className="mt-5 text-lg font-semibold">
          Travel Ready
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6b625b]">
          Practical bags and trolleys for school trips, holidays
          and journeys.
        </p>
      </div>


      <div className="rounded-3xl border border-[#eadfd2] bg-[#fffaf3] p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ead5bd] text-xl">
          ✨
        </div>

        <h3 className="mt-5 text-lg font-semibold">
          Seasonal Collections
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6b625b]">
          Special collections and essentials for festivals and
          occasions throughout the year.
        </p>
      </div>

    </div>
  </div>
</section>


{/* ABOUT STORE */}
<section className="bg-[#f3eadf] px-6 py-24 lg:px-10"  id="about">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

    {/* IMAGE */}
    <div className="overflow-hidden rounded-[2rem]">
      <img
        src="https://images.unsplash.com/photo-1601598851547-4302969d7c71?auto=format&fit=crop&w=1200&q=85"
        alt="Book store interior"
        className="h-[430px] w-full object-cover"
      />
    </div>


    {/* CONTENT */}
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
        About Our Store
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
        More Than Just a Book Store.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#6b625b]">
  Dileep Book Store is your local destination for books, stationery,
  school bags, travel essentials and seasonal products. Whether you're
  preparing for school, planning a trip or looking for something for a
  special occasion, we aim to make everyday shopping convenient with
  a variety of useful products under one roof.
</p>

      <p className="mt-4 text-base leading-8 text-[#6b625b]">
        Whether you are preparing for a new school year, planning a
        journey or looking for something special for a celebration,
        explore our collections and visit us in-store.
      </p>

      <a
        href="#contact"
        className="mt-8 inline-flex rounded-full bg-[#29231f] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b46b3c]"
      >
        Visit Our Store
      </a>
    </div>

  </div>
</section>
{/* CONTACT */}
<section
  id="contact"
  className="bg-[#fffaf3] px-6 py-24 lg:px-10"
>
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b46b3c]">
        Visit Us
      </p>

      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
        We'd Love to
        <span className="block text-[#b46b3c]">
          See You In Store.
        </span>
      </h2>

      <p className="mt-5 max-w-xl text-base leading-7 text-[#6b625b]">
        Looking for books, stationery, school essentials, bags or
        seasonal products? Visit Dileep Book Store or get in touch
        with us directly.
      </p>


      {/* CONTACT DETAILS */}
      <div className="mt-9 space-y-5">

        {/* ADDRESS */}
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ead5bd]">
            📍
          </div>

          <div>
            <p className="text-sm font-semibold">
              Store Address
            </p>

            <p className=" text-sm mt-1 leading-7 text-[#6b625b]">
    Dileep Book Store
    <br />
    Main Market, Muskura
    <br />
    Hamirpur, Uttar Pradesh – 210506, India
  </p>
          </div>
        </div>


        {/* PHONE */}
       <div className="flex gap-4">
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ead5bd]">
    📞
  </div>

  <div>
    <p className="text-sm font-semibold">
      Call Us
    </p>

    <div className="mt-1 space-y-1">
      <a
        href="tel:+916392964128"
        className="block text-sm text-[#6b625b] transition-colors hover:text-[#b46b3c]"
      >
        +91 63929 64128
      </a>

      <a
        href="tel:+918960420305"
        className="block text-sm text-[#6b625b] transition-colors hover:text-[#b46b3c]"
      >
        +91 89604 20305
      </a>
    </div>
  </div>
</div>

        {/* WHATSAPP */}
        <div className="flex gap-4">
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ead5bd]">
    💬
  </div>

  <div>
    <p className="text-sm font-semibold">
      WhatsApp
    </p>

    <a
      href="https://wa.me/916392964128?text=Hi%20Dileep%20Book%20Store%2C%20I%20would%20like%20to%20know%20about%20your%20products."
      target="_blank"
      rel="noreferrer"
      className="mt-1 block text-sm text-[#6b625b] transition-colors hover:text-[#b46b3c]"
    >
      Chat with us on WhatsApp
    </a>
  </div>
</div>


        {/* HOURS */}
        <div className="flex gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ead5bd]">
            🕐
          </div>

          <div>
            <p className="text-sm font-semibold">
              Store Hours
            </p>

            <p className="mt-1 text-sm leading-6 text-[#6b625b]">
              Monday – Sunday · 9:00 AM – 9:00 PM
            </p>
          </div>
        </div>

      </div>



    </div>


    {/* MAP */}
    <div className="overflow-hidden rounded-[2rem] border border-[#eadfd2] bg-white shadow-sm">

      <iframe
        title="Dileep Book Store Location"
        src="https://www.google.com/maps?q=India&output=embed"
        className="h-[480px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="bg-[#29231f] px-6 py-14 text-white lg:px-10">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 md:grid-cols-3">

      {/* BRAND */}
      <div>
        <a
          href="#home"
          className="text-xl font-bold tracking-[0.16em]"
        >
          DILEEP
          <span className="font-normal"> BOOK STORE</span>
        </a>

        <p className="mt-4 max-w-sm text-sm leading-6 text-[#cfc4bb]">
          Books, stationery, school essentials, bags, travel
          accessories, gifts and seasonal collections — all under
          one roof.
        </p>
      </div>


      {/* QUICK LINKS */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e2a875]">
          Quick Links
        </h3>

        <div className="mt-5 space-y-3">
          <a
            href="#home"
            className="block text-sm text-[#cfc4bb] transition-colors hover:text-white"
          >
            Home
          </a>

          <a
            href="#categories"
            className="block text-sm text-[#cfc4bb] transition-colors hover:text-white"
          >
            Categories
          </a>

          <a
            href="#collection"
            className="block text-sm text-[#cfc4bb] transition-colors hover:text-white"
          >
            Collection
          </a>

          <a
            href="#seasonal"
            className="block text-sm text-[#cfc4bb] transition-colors hover:text-white"
          >
            Seasonal
          </a>

          <a
            href="#contact"
            className="block text-sm text-[#cfc4bb] transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>


      {/* CONTACT */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e2a875]">
          Visit Us
        </h3>

        <p className="mt-5 text-sm leading-6 text-[#cfc4bb]">
          Dileep Book Store
          <br />
          Main Market, Muskura
        </p>

        <div className="mt-4 space-y-2">
          <a
            href="tel:+916392964128"
            className="block text-sm text-[#cfc4bb] hover:text-white"
          >
            +91 63929 64128
          </a>

          <a
            href="tel:+918960420305"
            className="block text-sm text-[#cfc4bb] hover:text-white"
          >
            +91 89604 20305
          </a>
        </div>

        <a
          href="https://wa.me/916392964128?text=Hi%20Dileep%20Book%20Store%2C%20I%20would%20like%20to%20know%20about%20your%20products."
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full border border-[#e2a875] px-5 py-2.5 text-sm font-semibold text-[#e2a875] transition-all hover:bg-[#e2a875] hover:text-[#29231f]"
        >
          WhatsApp Us
        </a>
      </div>

    </div>


    {/* BOTTOM */}
    <div className="mt-12 border-t border-white/10 pt-6">
      <p className="text-center text-xs text-[#9f958e]">
        © 2026 Dileep Book Store. All rights reserved.
      </p>
    </div>

  </div>
</footer>


{/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/916392964128?text=Hi%20Dileep%20Book%20Store%2C%20I%20would%20like%20to%20know%20about%20your%20products."
  target="_blank"
  rel="noreferrer"
  aria-label="Chat on WhatsApp"
  className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
>
  <FaWhatsapp className="text-3xl" />
</a>
    </div>
  );
}


function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route
  path="/books-stationery"
  element={<BooksStationery />}
/>

      <Route
  path="/school-bags"
  element={<SchoolBags />}
/>
      <Route
  path="/travel-bags"
  element={<TravelBags />}
/>

      <Route
  path="/festive-seasonal"
  element={<FestiveSeasonal />}
/>

    </Routes>
  );
}

export default App;