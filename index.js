export default function PrezentNiespodzianka() { const products = [ { title: "Wieczne Róże", desc: "Ręcznie robione wieczne róże w różnych kolorach, idealne na wyjątkowe okazje.", price: "Od 120 zł" }, { title: "Boxy Niespodzianki", desc: "Eleganckie drewniane tace i boxy z czekoladkami oraz pluszowym misiem.", price: "Od 150 zł" }, { title: "Drewniane Tace Premium", desc: "Dekorowane ręcznie tace prezentowe stworzone z dbałością o każdy detal.", price: "Od 180 zł" } ];

return ( <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 text-gray-800">

{/* HERO */}
  <section className="relative px-6 py-24 text-center bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200">
    <div className="max-w-3xl mx-auto">

      <h1 className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-6 tracking-tight">
        Prezent Niespodzianka
      </h1>

      <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
        Prezenty wieczne jak miłość, którą chcesz podarować 🌹
      </p>

      <p className="text-md text-gray-600 mb-10">
        Wieczne róże i wyjątkowe prezenty handmade tworzone z miłością.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://wa.me/48575202777"
          className="bg-pink-600 hover:bg-pink-700 transition text-white px-8 py-3 rounded-full shadow-lg font-semibold"
        >
          Zamów przez WhatsApp
        </a>

        <a
          href="https://www.tiktok.com/@prezent_niespodzianka?_r=1&_t=ZN-96Da1oA83NP"
          target="_blank"
          className="bg-white border border-pink-300 hover:bg-pink-50 transition px-8 py-3 rounded-full shadow font-semibold"
        >
          Zobacz TikTok
        </a>
      </div>
    </div>
  </section>

  {/* ABOUT */}
  <section className="px-6 py-20 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-pink-700 mb-10">
      O nas
    </h2>

    <div className="bg-white rounded-3xl shadow-xl p-10 leading-8 text-lg border border-pink-100">
      <p>
        Tworzymy wyjątkowe prezenty handmade i wieczne róże na każdą okazję.
        Każdy produkt przygotowywany jest ręcznie z największą dbałością o detale.
      </p>

      <p className="mt-6">
        Nasze prezenty są idealne na:
        Dzień Matki, urodziny, rocznice, Walentynki,
        Dzień Ojca, Dzień Kobiet oraz wszystkie wyjątkowe chwile życia.
      </p>

      <p className="mt-6 font-semibold text-pink-600">
        Wysyłka na terenie całej Polski 🇵🇱
      </p>
    </div>
  </section>

  {/* PRODUCTS */}
  <section className="px-6 py-20 bg-pink-50">
    <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
      Nasze Produkty
    </h2>

    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {products.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
        >
          <div className="h-56 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center text-pink-400 font-medium">
            Zdjęcie produktu
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-pink-700 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {item.desc}
            </p>

            <div className="font-bold text-lg text-pink-600 mb-4">
              {item.price}
            </div>

            <a
              href="https://wa.me/48575202777"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-xl transition"
            >
              Zamów teraz
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* WHY US */}
  <section className="px-6 py-20 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-pink-700 mb-12">
      Dlaczego My?
    </h2>

    <div className="grid md:grid-cols-4 gap-6">
      {[
        "Ręcznie robione produkty",
        "Personalizowane prezenty",
        "Elegancki design premium",
        "Szybki kontakt przez WhatsApp"
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-6 text-center border border-pink-100 hover:shadow-xl transition"
        >
          <p className="font-medium text-gray-700">
            {item}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* FOOTER */}
  <footer className="bg-pink-700 text-white text-center py-10 mt-10">
    <p className="text-xl font-semibold">
      Prezent Niespodzianka © 2026
    </p>

    <p className="mt-2 opacity-90">
      Wysyłka na terenie całej Polski 🇵🇱
    </p>
  </footer>
</div>

); }
