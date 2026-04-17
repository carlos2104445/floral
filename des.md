import { useState } from 'react';

export default function LovenWebsitePrototype() {
  const [page, setPage] = useState('home');

  const nav = ['Home', 'Signature Bouquets', 'Gift Sets', 'Custom Order'];

  const collectionCards = [
    {
      title: 'Signature Bouquets',
      subtitle: 'Elegant, handcrafted arrangements for everyday luxury.',
      cta: 'SHOP NOW',
      image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Gift Sets',
      subtitle: 'Curated floral gifts for meaningful occasions.',
      cta: 'EXPLORE',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Custom Order',
      subtitle: 'Create your own personalized bouquet.',
      cta: 'START ORDER',
      image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80',
  ];

  const handleNav = (item) => {
    if (item === 'Home') setPage('home');
    if (item === 'Signature Bouquets') setPage('signature');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Parisienne&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Inter, sans-serif; background: #000; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-script { font-family: 'Parisienne', cursive; }
      `}</style>

      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button onClick={() => setPage('home')} className="font-display text-4xl tracking-[0.14em] text-[#e3c59d]">
            LOVÉN
          </button>

          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            {nav.map((item) => {
              const active = (item === 'Home' && page === 'home') || (item === 'Signature Bouquets' && page === 'signature');
              return (
                <button
                  key={item}
                  onClick={() => handleNav(item)}
                  className={`border-b pb-1 transition hover:text-white ${active ? 'border-[#e3c59d] text-white' : 'border-transparent hover:border-[#e3c59d]'}`}
                >
                  {item}
                  {item === 'Gift Sets' || item === 'Custom Order' ? <span className="block text-[11px] text-white/55">Launching Soon</span> : null}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 text-[#e3c59d]">
            <div className="text-xl">⌕</div>
            <div className="relative text-xl">
              ♡
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#e3c59d] text-[10px] font-bold text-black">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {page === 'home' ? (
        <>
          <section className="relative overflow-hidden border-b border-white/10 bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.86)_32%,rgba(0,0,0,0.42)_60%,rgba(0,0,0,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,rgba(117,83,53,0.18),transparent_26%)]" />

            <div className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-12 lg:px-10">
              <div className="relative z-10 max-w-xl">
                <h1 className="font-display text-6xl font-medium leading-none text-[#f5eadc] sm:text-8xl">LOVÉN</h1>
                <p className="font-script mt-2 text-4xl text-[#ead5b5] sm:text-5xl">Love lives here.</p>
                <p className="mt-6 max-w-md text-xl leading-9 text-white/86 sm:text-2xl sm:leading-10">
                  Luxury floral arrangements designed for every moment.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button onClick={() => setPage('signature')} className="bg-[#e3c59d] px-7 py-4 text-sm font-semibold text-black">SIGNATURE BOUQUETS</button>
                  <button className="border border-white/25 px-7 py-4 text-sm font-semibold text-white">GIFT SETS</button>
                  <button className="border border-white/25 px-7 py-4 text-sm font-semibold text-white">CUSTOM ORDER</button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f3e9de] px-6 py-14 text-black lg:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold tracking-[0.34em] text-[#b79569]">ABOUT LOVÉN</p>
              <h2 className="font-display mt-5 text-4xl font-medium leading-tight text-[#2c1a12] sm:text-6xl">
                At LOVÉN, we create more than flowers.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/70 sm:text-2xl sm:leading-10">
                Each arrangement is thoughtfully designed to capture emotion, beauty, and elegance — made to elevate every moment.
              </p>
              <div className="mt-8 text-3xl text-[#b79569]">❦</div>
            </div>
          </section>

          <section className="bg-black px-6 py-14 text-white lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <p className="text-xs font-semibold tracking-[0.34em] text-[#c5a77f]">EXPLORE OUR COLLECTIONS</p>
                <h2 className="font-display mt-5 text-5xl font-medium text-[#f5eadc] sm:text-7xl">Find the Perfect Arrangement</h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {collectionCards.map((card, index) => (
                  <div key={card.title} className="overflow-hidden rounded-2xl bg-[#141414] ring-1 ring-white/8">
                    <img src={card.image} alt={card.title} className="h-[340px] w-full object-cover" />
                    <div className="px-7 py-8 text-center">
                      <h3 className="font-display text-4xl font-medium text-[#f5eadc]">{card.title}</h3>
                      <p className="mx-auto mt-3 max-w-xs text-lg leading-8 text-white/72">{card.subtitle}</p>
                      <button
                        onClick={() => index === 0 && setPage('signature')}
                        className="mt-6 bg-[#e3c59d] px-7 py-3 text-sm font-semibold text-black"
                      >
                        {card.cta}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-4 gap-0">
                {gallery.map((image, index) => (
                  <img key={index} src={image} alt="Floral gallery" className="h-40 w-full object-cover" />
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#f3e9de] px-6 py-14 text-black lg:px-10">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_left_center,rgba(0,0,0,0.08),transparent_55%)]" />
            <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_right_center,rgba(0,0,0,0.08),transparent_55%)]" />

            <div className="relative mx-auto max-w-5xl text-center">
              <h2 className="font-display text-5xl font-medium text-[#2c1a12] sm:text-6xl">Let us create something beautiful for you.</h2>
              <button onClick={() => setPage('signature')} className="mt-8 bg-black px-8 py-4 text-sm font-semibold text-white">
                SHOP SIGNATURE BOUQUETS
              </button>
            </div>
          </section>
        </>
      ) : (
        <>
          <section id="signature-header" className="relative overflow-hidden border-b border-white/10 px-6 py-7 text-center lg:px-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f08]/80 via-black/65 to-[#3a2416]/50" />
            <div className="relative mx-auto max-w-4xl">
              <h1 className="font-display text-5xl font-medium tracking-[0.02em] text-[#f5eadc] sm:text-7xl">Signature Bouquets</h1>
              <p className="mt-2 text-sm font-light tracking-[0.02em] text-[#efe2d1]/90 sm:text-lg">
                Elegant, handcrafted arrangements designed for every moment.
              </p>
            </div>
          </section>

          <section id="signature-product" className="border-b border-white/10 bg-black py-0 text-white">
            <div className="w-full bg-black">
              <div className="grid min-h-[470px] items-stretch lg:grid-cols-[30%_70%]">
                <div className="relative min-h-[470px] overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1400&q=80"
                    alt="Classic rose bouquet"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>

                <div className="flex items-center bg-black px-6 py-8 md:px-8 lg:px-10">
                  <div className="w-full max-w-none">
                    <h2 className="font-display text-4xl font-medium leading-tight text-[#f5eadc] sm:text-5xl">Classic Rose Collection</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
                      Timeless single-color rose bouquets, designed for a clean and elegant look.
                    </p>

                    <div className="mt-8">
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-[#d7b48a] sm:text-xs">1. CHOOSE YOUR COLOR</p>
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4 xl:gap-x-8">
                        {[
                          { name: 'Red', bg: 'bg-[#8b000d]' },
                          { name: 'White', bg: 'bg-[#f3eee8]' },
                          { name: 'Pink', bg: 'bg-[#efc8d7]' },
                          { name: 'Blush', bg: 'bg-[#e7b4a0]' },
                          { name: 'Yellow', bg: 'bg-[#c99a35]' },
                          { name: 'Custom', bg: 'bg-[conic-gradient(from_180deg_at_50%_50%,#ff7ad9_0deg,#8be8ff_90deg,#fff08c_180deg,#d6a4ff_270deg,#ff7ad9_360deg)]' },
                        ].map((color, index) => (
                          <button key={color.name} className="group flex min-w-[54px] flex-col items-center text-center">
                            <span
                              className={`h-11 w-11 rounded-full ${color.bg} ${index === 0 ? 'border border-white shadow-[0_0_0_3px_rgba(255,255,255,0.08)]' : 'border border-white/20'} transition duration-200 group-hover:scale-105`}
                            />
                            <span className="mt-2 text-xs text-white/88 sm:text-sm">{color.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-[#d7b48a] sm:text-xs">2. CHOOSE YOUR SIZE</p>
                      <div className="mt-4 grid grid-cols-5 gap-2">
                        {[
                          ['X Small', '25 Roses', '$60 - $100'],
                          ['Small', '50 Roses', '$120 - $175'],
                          ['Medium', '100 Roses', '$200 - $320'],
                          ['Large', '250 Roses', '$400 - $600'],
                          ['X Large', '500 Roses', '$800+'],
                        ].map(([label, count, price], index) => (
                          <button
                            key={label}
                            className={`min-w-0 border px-1.5 py-2 text-center transition ${index === 0 ? 'border-[#d7b48a] bg-[#050505]' : 'border-[#6d5437] bg-black'} hover:border-[#d7b48a]`}
                          >
                            <div className="text-[11px] font-semibold leading-4 text-[#f5eadc] lg:text-[13px]">{label}</div>
                            <div className="mt-0.5 text-[10px] text-white/78 lg:text-[11px]">{count}</div>
                            <div className="mt-0.5 text-[11px] font-semibold text-[#d7b48a] lg:text-[13px]">{price}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-xs italic text-white/45 sm:text-sm">
                      Final price may vary based on flower availability, color selection, and season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="signature-product-alt" className="border-b border-black/10 bg-[#f1e7db] py-0 text-black">
            <div className="w-full bg-[#f1e7db]">
              <div className="grid min-h-[470px] items-stretch lg:grid-cols-[70%_30%]">
                <div className="flex items-center bg-[#f1e7db] px-6 py-8 md:px-8 lg:px-10">
                  <div className="w-full max-w-none">
                    <h2 className="font-display text-4xl font-medium leading-tight text-[#2c1a12] sm:text-5xl">Assorted Rose Collection</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-black/70 sm:text-base">
                      A vibrant mix of rose colors for a more expressive and unique arrangement.
                    </p>

                    <div className="mt-8">
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-[#8c6a45] sm:text-xs">1. CHOOSE YOUR STYLE</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {['Soft Pastels', 'Bright Mix', 'Romantic Mix', 'Custom Mix'].map((style, index) => (
                          <button
                            key={style}
                            className={`rounded-full border px-5 py-2 text-xs font-medium transition sm:text-sm ${index === 0 ? 'border-black bg-black text-white' : 'border-black/15 bg-white/40 text-black/85 hover:border-black/30'}`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-[#8c6a45] sm:text-xs">2. CHOOSE YOUR SIZE</p>
                      <div className="mt-4 grid grid-cols-5 gap-2">
                        {[
                          ['X Small', '25 Roses', '$60 - $100'],
                          ['Small', '50 Roses', '$120 - $175'],
                          ['Medium', '100 Roses', '$200 - $320'],
                          ['Large', '250 Roses', '$400 - $600'],
                          ['X Large', '250 Roses', '$800+'],
                        ].map(([label, count, price], index) => (
                          <button
                            key={label}
                            className={`min-w-0 border px-1.5 py-2 text-center transition ${index === 0 ? 'border-[#c7a47b] bg-[#f7efe6]' : 'border-[#d8c3ab] bg-[#f5ede3]'} hover:border-[#b88d61]`}
                          >
                            <div className="text-[11px] font-semibold leading-4 text-[#2c1a12] lg:text-[13px]">{label}</div>
                            <div className="mt-0.5 text-[10px] text-black/65 lg:text-[11px]">{count}</div>
                            <div className="mt-0.5 text-[11px] font-semibold text-[#8c6a45] lg:text-[13px]">{price}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-xs italic text-black/45 sm:text-sm">
                      Final price may vary based on flower availability, color selection, and season.
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[470px] overflow-hidden bg-[#eadbcc]">
                  <img
                    src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1400&q=80"
                    alt="Assorted rose bouquet"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="signature-product-kids" className="border-b border-white/10 bg-black py-0 text-white">
            <div className="w-full bg-black">
              <div className="grid min-h-[470px] items-stretch lg:grid-cols-[30%_70%]">
                <div className="relative min-h-[470px] overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1400&q=80"
                    alt="Kids floral bouquet"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>

                <div className="relative flex items-center bg-black px-6 py-8 md:px-8 lg:px-10">
                  <div className="w-full max-w-none">
                    <h2 className="font-display text-4xl font-medium leading-tight text-[#f5eadc] sm:text-5xl">Kids Floral Collection</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
                      Playful, colorful arrangements designed to bring joy and excitement.
                    </p>

                    <div className="mt-8">
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-[#d7b48a] sm:text-xs">1. CHOOSE YOUR COLOR THEME</p>
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-4 xl:gap-x-8">
                        {[
                          { name: 'Pink Mix', bg: 'bg-[#f184be]' },
                          { name: 'Purple Mix', bg: 'bg-[#c39af0]' },
                          { name: 'Bright Rainbow', bg: 'bg-[conic-gradient(from_180deg_at_50%_50%,#ff7ad9_0deg,#8be8ff_90deg,#fff08c_180deg,#9effb2_270deg,#ff7ad9_360deg)]' },
                          { name: 'Soft Pastel', bg: 'bg-[linear-gradient(135deg,#f8d4e5_0%,#f5e5b8_50%,#d5d1ff_100%)]' },
                          { name: 'Custom', bg: 'bg-[conic-gradient(from_180deg_at_50%_50%,#ff7ad9_0deg,#8be8ff_90deg,#fff08c_180deg,#d6a4ff_270deg,#ff7ad9_360deg)]' },
                        ].map((color, index) => (
                          <button key={color.name} className="group flex min-w-[54px] flex-col items-center text-center">
                            <span
                              className={`h-11 w-11 rounded-full ${color.bg} ${index === 0 ? 'border border-white shadow-[0_0_0_3px_rgba(255,255,255,0.08)]' : 'border border-white/20'} transition duration-200 group-hover:scale-105`}
                            />
                            <span className="mt-2 text-xs text-white/88 sm:text-sm">{color.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-[#d7b48a] sm:text-xs">2. CHOOSE YOUR SIZE</p>
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        {[
                          ['X Small', '$40 - $60'],
                          ['Small', '$60 - $90'],
                          ['Medium', '$100 - $150'],
                          ['Large', '$150 - $220'],
                        ].map(([label, price], index) => (
                          <button
                            key={label}
                            className={`min-w-0 border px-1.5 py-2 text-center transition ${index === 0 ? 'border-[#d7b48a] bg-[#050505]' : 'border-[#6d5437] bg-black'} hover:border-[#d7b48a]`}
                          >
                            <div className="text-[11px] font-semibold leading-4 text-[#f5eadc] lg:text-[13px]">{label}</div>
                            <div className="mt-0.5 text-[11px] font-semibold text-[#d7b48a] lg:text-[13px]">{price}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-xs italic text-white/45 sm:text-sm">
                      Final price may vary based on flower availability, color selection, and season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="enhance-bouquet" className="border-b border-black/10 bg-[#f1e7db] px-6 py-14 text-black lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="font-display text-4xl font-medium text-[#2c1a12] sm:text-5xl">Enhance Your Bouquet</h2>
                <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-black/65 sm:text-base">
                  Add the perfect finishing touch. These special details make your gift even more meaningful.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-5 gap-4">
                {[
                  {
                    title: 'Custom Name Sign',
                    price: '+$15 - $25',
                    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
                  },
                  {
                    title: 'Ribbon Personalization',
                    price: '+$10.00',
                    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
                  },
                  {
                    title: 'Glitter Decoration',
                    price: '+$10.00',
                    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=800&q=80',
                  },
                  {
                    title: 'Greeting Card',
                    price: '+$5.00',
                    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80',
                  },
                  {
                    title: 'Round Bouquet Base',
                    price: '+$30.00',
                    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=80',
                  },
                ].map((item) => (
                  <label key={item.title} className="block cursor-pointer">
                    <div className="overflow-hidden rounded-sm bg-[#eadbcc]">
                      <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                    </div>
                    <div className="mt-3 flex items-start gap-3">
                      <input type="checkbox" className="mt-1 h-4 w-4" />
                      <div>
                        <div className="text-sm font-medium text-[#2c1a12] sm:text-base">{item.title}</div>
                        <div className="mt-1 text-sm text-[#8c6a45]">{item.price}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-10 rounded-md bg-[#1c140d] px-6 py-5 text-center text-sm text-[#e8d6bd] sm:text-base">
                Final price may vary based on flower availability, color selection, and season.
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
