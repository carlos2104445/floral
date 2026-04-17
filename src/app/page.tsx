"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LovenWebsite() {
  const [page, setPage] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const nav = ['Home', 'Signature Bouquets', 'Gift Sets', 'Custom Order'];

  const collectionCards = [
    {
      title: 'Signature Bouquets',
      subtitle: 'Elegant, handcrafted arrangements for everyday luxury.',
      cta: 'SHOP NOW',
      image: '/images/classic_red_roses_1776427660541.png',
      targetPage: 'signature'
    },
    {
      title: 'Gift Sets',
      subtitle: 'Curated floral gifts for meaningful occasions.',
      cta: 'EXPLORE',
      image: '/images/gift_sets_black_box_1776427689237.png',
      targetPage: 'gift'
    },
    {
      title: 'Custom Order',
      subtitle: 'Create your own personalized bouquet.',
      cta: 'START ORDER',
      image: '/images/white_roses_custom_1776427706759.png',
      targetPage: 'custom'
    },
  ];

  const gallery = [
    '/images/mixed_pastel_roses_1776427722728.png',
    '/images/home_hero_white_roses_tag.jpg',
    '/images/classic_red_roses_1776427660541.png',
    '/images/white_roses_custom_1776427706759.png',
  ];

  const handleNav = (item: string) => {
    if (item === 'Home') setPage('home');
    if (item === 'Signature Bouquets') setPage('signature');
    if (item === 'Gift Sets') setPage('gift');
    if (item === 'Custom Order') setPage('custom');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button onClick={() => setPage('home')} className="font-serif text-4xl tracking-[0.14em] text-[#e3c59d]">
            LOVÉN
          </button>

          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            {nav.map((item) => {
              const active = 
                (item === 'Home' && page === 'home') || 
                (item === 'Signature Bouquets' && page === 'signature') ||
                (item === 'Gift Sets' && page === 'gift') ||
                (item === 'Custom Order' && page === 'custom');
                
              return (
                <button
                  key={item}
                  onClick={() => handleNav(item)}
                  className={`border-b pb-1 transition hover:text-white ${active ? 'border-[#e3c59d] text-white' : 'border-transparent hover:border-[#e3c59d]'}`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-6 text-[#e3c59d]">
            <button className="hidden md:block hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <button className="relative hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#e3c59d] text-[10px] font-bold text-black">
                0
              </span>
            </button>
            <button 
              className="md:hidden hover:text-white transition ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4">
                {nav.map((item) => {
                  const active = 
                    (item === 'Home' && page === 'home') || 
                    (item === 'Signature Bouquets' && page === 'signature') ||
                    (item === 'Gift Sets' && page === 'gift') ||
                    (item === 'Custom Order' && page === 'custom');
                  
                  return (
                    <button
                      key={item}
                      onClick={() => handleNav(item)}
                      className={`py-4 text-left text-lg tracking-wider transition ${active ? 'text-[#e3c59d]' : 'text-white/80 hover:text-white'}`}
                    >
                      {item}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {page === 'home' && (
            <>
              {/* Home Hero Split Layout */}
              <section className="relative overflow-hidden border-b border-white/10 bg-black">
                <div className="grid min-h-[78vh] lg:grid-cols-[55%_45%]">
                  <div className="flex items-center justify-center px-6 py-12 lg:px-16 bg-[radial-gradient(circle_at_30%_50%,rgba(117,83,53,0.18),transparent_40%)]">
                    <div className="relative z-10 w-full max-w-xl text-left">
                      <h1 className="font-serif text-6xl font-medium leading-none text-[#f5eadc] sm:text-8xl tracking-tight">LOVÉN</h1>
                      <p className="font-script mt-2 text-4xl text-[#ead5b5] sm:text-5xl">Love lives here.</p>
                      <p className="mt-8 max-w-md text-xl leading-9 text-white/86 sm:text-2xl sm:leading-10">
                        Luxury floral arrangements designed for every moment.
                      </p>

                      <div className="mt-12 flex flex-wrap gap-4">
                        <button onClick={() => setPage('signature')} className="bg-[#e3c59d] px-7 py-4 text-sm font-semibold text-black tracking-widest hover:bg-[#d4b58e] transition">SIGNATURE BOUQUETS</button>
                        <button onClick={() => setPage('gift')} className="border border-white/25 px-7 py-4 text-sm font-semibold text-white tracking-widest hover:border-[#e3c59d] transition">GIFT SETS</button>
                        <button onClick={() => setPage('custom')} className="border border-white/25 px-7 py-4 text-sm font-semibold text-white tracking-widest hover:border-[#e3c59d] transition">CUSTOM ORDER</button>
                      </div>
                    </div>
                  </div>
                  <div className="relative min-h-[50vh] w-full hidden lg:block">
                    <Image
                      src="/images/home_hero_white_roses_tag.jpg"
                      alt="Luxury white rose bouquet in black wrapping"
                      fill
                      priority
                      className="absolute inset-0 object-contain object-right"
                    />
                  </div>
                </div>
              </section>

              <section className="bg-[#f3e9de] px-6 py-14 text-black lg:px-10">
                <div className="mx-auto max-w-4xl text-center">
                  <p className="text-xs font-semibold tracking-[0.34em] text-[#b79569]">ABOUT LOVÉN</p>
                  <h2 className="font-serif mt-5 text-4xl font-medium leading-tight text-[#2c1a12] sm:text-6xl">
                    At LOVÉN, we create more than flowers.
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/70 sm:text-2xl sm:leading-10">
                    Each arrangement is thoughtfully designed to capture emotion, beauty, and elegance — made to elevate every moment.
                  </p>
                  <div className="mt-8 text-3xl text-[#b79569] font-serif">❦</div>
                </div>
              </section>

              <section className="bg-black px-6 py-14 text-white lg:px-10">
                <div className="mx-auto max-w-7xl">
                  <div className="text-center">
                    <p className="text-xs font-semibold tracking-[0.34em] text-[#c5a77f]">EXPLORE OUR COLLECTIONS</p>
                    <h2 className="font-serif mt-5 text-5xl font-medium text-[#f5eadc] sm:text-7xl">Find the Perfect Arrangement</h2>
                  </div>

                  <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {collectionCards.map((card, index) => (
                      <div key={card.title} className="overflow-hidden rounded-2xl bg-[#141414] ring-1 ring-white/8">
                        <div className="relative h-[340px] w-full">
                           <Image src={card.image} alt={card.title} fill className="object-cover" />
                        </div>
                        <div className="px-7 py-8 text-center">
                          <h3 className="font-serif text-4xl font-medium text-[#f5eadc]">{card.title}</h3>
                          <p className="mx-auto mt-3 max-w-xs text-lg leading-8 text-white/72">{card.subtitle}</p>
                          <button
                            onClick={() => setPage(card.targetPage)}
                            className="mt-6 bg-[#e3c59d] px-7 py-3 text-sm font-semibold text-black tracking-widest"
                          >
                            {card.cta}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-4 gap-0">
                    {gallery.map((image, index) => (
                      <div key={index} className="relative h-40 w-full">
                         <Image src={image} alt="Floral gallery" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden bg-[#f3e9de] px-6 py-20 text-black lg:px-10">
                {/* Generated floral shadow background pattern */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/floral_shadow_bg.png"
                    alt="Floral shadow pattern"
                    fill
                    className="object-cover object-center opacity-80"
                  />
                </div>
                
                <div className="absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_left_center,rgba(0,0,0,0.08),transparent_55%)]" />
                <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_right_center,rgba(0,0,0,0.08),transparent_55%)]" />

                <div className="relative mx-auto max-w-5xl text-center py-8">
                  <h2 className="font-serif text-5xl font-medium text-[#2c1a12] sm:text-6xl drop-shadow-sm">Let us create something beautiful for you.</h2>
                  <button onClick={() => setPage('signature')} className="mt-10 bg-black px-8 py-4 text-sm font-semibold text-white tracking-widest hover:bg-[#1a1a1a] transition">
                    SHOP SIGNATURE BOUQUETS
                  </button>
                </div>
              </section>
            </>
          )}

          {page === 'signature' && (
            <>
              <section id="signature-header" className="relative overflow-hidden border-b border-white/10 px-6 py-12 text-center lg:px-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(117,83,53,0.12),transparent_60%)]" />
                <div className="relative mx-auto max-w-4xl pt-6">
                  <h1 className="font-serif text-5xl font-medium tracking-[0.02em] text-[#f5eadc] sm:text-7xl">Signature Bouquets</h1>
                  <p className="mt-4 text-sm font-light tracking-[0.02em] text-[#efe2d1]/90 sm:text-lg">
                    Elegant, handcrafted arrangements designed for every moment.
                  </p>
                </div>
              </section>

              <section id="signature-product" className="border-b border-white/10 bg-black py-0 text-white">
                <div className="w-full bg-black">
                  <div className="grid min-h-[470px] items-stretch lg:grid-cols-[40%_60%] xl:grid-cols-[30%_70%]">
                    <div className="relative min-h-[470px] overflow-hidden bg-black border-r border-white/10">
                      <Image
                        src="/images/classic_red_roses_1776427660541.png"
                        alt="Classic rose bouquet"
                        fill
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex items-center bg-black px-6 py-10 md:px-10 lg:px-16">
                      <div className="w-full max-w-none">
                        <h2 className="font-serif text-4xl font-medium leading-tight text-[#f5eadc] sm:text-5xl">Classic Rose Collection</h2>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
                          Timeless single-color rose bouquets, designed for a clean and elegant look.
                        </p>

                        <div className="mt-10">
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

                        <div className="mt-10">
                          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#d7b48a] sm:text-xs">2. CHOOSE YOUR SIZE</p>
                          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                            {[
                              ['X Small', '25 Roses', '$60 - $100'],
                              ['Small', '50 Roses', '$120 - $175'],
                              ['Medium', '100 Roses', '$200 - $320'],
                              ['Large', '250 Roses', '$400 - $600'],
                              ['X Large', '500 Roses', '$800+'],
                            ].map(([label, count, price], index) => (
                              <button
                                key={label}
                                className={`min-w-0 border px-1.5 py-2.5 text-center transition ${index === 0 ? 'border-[#d7b48a] bg-[#050505]' : 'border-[#6d5437] bg-black'} hover:border-[#d7b48a]`}
                              >
                                <div className="text-[11px] font-semibold leading-4 text-[#f5eadc] lg:text-[13px]">{label}</div>
                                <div className="mt-1 text-[10px] text-white/78 lg:text-[11px]">{count}</div>
                                <div className="mt-0.5 text-[11px] font-semibold text-[#d7b48a] lg:text-[13px]">{price}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <p className="mt-6 text-xs italic text-white/45 sm:text-sm">
                          Final price may vary based on flower availability, color selection, and season.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="signature-product-alt" className="border-b border-black/10 bg-[#f1e7db] py-0 text-black">
                <div className="w-full bg-[#f1e7db]">
                  <div className="grid min-h-[470px] items-stretch lg:grid-cols-[60%_40%] xl:grid-cols-[70%_30%]">
                    <div className="flex items-center bg-[#f1e7db] px-6 py-10 md:px-10 lg:px-16">
                      <div className="w-full max-w-none">
                        <h2 className="font-serif text-4xl font-medium leading-tight text-[#2c1a12] sm:text-5xl">Assorted Rose Collection</h2>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-black/70 sm:text-base">
                          A vibrant mix of rose colors for a more expressive and unique arrangement.
                        </p>

                        <div className="mt-10">
                          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#8c6a45] sm:text-xs">1. CHOOSE YOUR STYLE</p>
                          <div className="mt-5 flex flex-wrap gap-3">
                            {['Soft Pastels', 'Bright Mix', 'Romantic Mix', 'Custom Mix'].map((style, index) => (
                              <button
                                key={style}
                                className={`rounded-full border px-6 py-2.5 text-xs font-medium transition sm:text-sm ${index === 0 ? 'border-black bg-black text-white' : 'border-black/15 bg-white/40 text-black/85 hover:border-black/30'}`}
                              >
                                {style}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="mt-10">
                          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#8c6a45] sm:text-xs">2. CHOOSE YOUR SIZE</p>
                          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                            {[
                              ['X Small', '25 Roses', '$60 - $100'],
                              ['Small', '50 Roses', '$120 - $175'],
                              ['Medium', '100 Roses', '$200 - $320'],
                              ['Large', '250 Roses', '$400 - $600'],
                              ['X Large', '250 Roses', '$800+'],
                            ].map(([label, count, price], index) => (
                              <button
                                key={label}
                                className={`min-w-0 border px-1.5 py-2.5 text-center transition ${index === 0 ? 'border-[#c7a47b] bg-[#f7efe6]' : 'border-[#d8c3ab] bg-[#f5ede3]'} hover:border-[#b88d61]`}
                              >
                                <div className="text-[11px] font-semibold leading-4 text-[#2c1a12] lg:text-[13px]">{label}</div>
                                <div className="mt-1 text-[10px] text-black/65 lg:text-[11px]">{count}</div>
                                <div className="mt-0.5 text-[11px] font-semibold text-[#8c6a45] lg:text-[13px]">{price}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <p className="mt-6 text-xs italic text-black/45 sm:text-sm">
                          Final price may vary based on flower availability, color selection, and season.
                        </p>
                      </div>
                    </div>

                    <div className="relative min-h-[470px] overflow-hidden bg-[#eadbcc] border-l border-black/10">
                      <Image
                        src="/images/mixed_pastel_roses_1776427722728.png"
                        alt="Assorted rose bouquet"
                        fill
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section id="signature-product-kids" className="border-b border-white/10 bg-black py-0 text-white">
                <div className="w-full bg-black">
                  <div className="grid min-h-[470px] items-stretch lg:grid-cols-[40%_60%] xl:grid-cols-[30%_70%]">
                    <div className="relative min-h-[470px] overflow-hidden bg-black border-r border-white/10">
                      <Image
                        src="/images/teddy_bear_bouquet_1776427738683.png"
                        alt="Kids floral bouquet"
                        fill
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="relative flex items-center bg-black px-6 py-10 md:px-10 lg:px-16">
                      <div className="w-full max-w-none">
                        <h2 className="font-serif text-4xl font-medium leading-tight text-[#f5eadc] sm:text-5xl">Kids Floral Collection</h2>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
                          Playful, colorful arrangements designed to bring joy and excitement.
                        </p>

                        <div className="mt-10">
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

                        <div className="mt-10">
                          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#d7b48a] sm:text-xs">2. CHOOSE YOUR SIZE</p>
                          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              ['X Small', '$40 - $60'],
                              ['Small', '$60 - $90'],
                              ['Medium', '$100 - $150'],
                              ['Large', '$150 - $220'],
                            ].map(([label, price], index) => (
                              <button
                                key={label}
                                className={`min-w-0 border px-1.5 py-2.5 text-center transition ${index === 0 ? 'border-[#d7b48a] bg-[#050505]' : 'border-[#6d5437] bg-black'} hover:border-[#d7b48a]`}
                              >
                                <div className="text-[11px] font-semibold leading-4 text-[#f5eadc] lg:text-[13px]">{label}</div>
                                <div className="mt-1 text-[11px] font-semibold text-[#d7b48a] lg:text-[13px]">{price}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <p className="mt-6 text-xs italic text-white/45 sm:text-sm">
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
                    <h2 className="font-serif text-4xl font-medium text-[#2c1a12] sm:text-5xl">Enhance Your Bouquet</h2>
                    <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-black/65 sm:text-base">
                      Add the perfect finishing touch. These special details make your gift even more meaningful.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      {
                        title: 'Custom Name Sign',
                        price: '+$15 - $25',
                        image: '/images/classic_red_roses_1776427660541.png',
                      },
                      {
                        title: 'Ribbon Personalization',
                        price: '+$10.00',
                        image: '/images/gift_sets_black_box_1776427689237.png',
                      },
                      {
                        title: 'Glitter Decoration',
                        price: '+$10.00',
                        image: '/images/home_hero_white_roses_tag.jpg',
                      },
                      {
                        title: 'Greeting Card',
                        price: '+$5.00',
                        image: '/images/mixed_pastel_roses_1776427722728.png',
                      },
                      {
                        title: 'Round Bouquet Base',
                        price: '+$30.00',
                        image: '/images/teddy_bear_bouquet_1776427738683.png',
                      },
                    ].map((item) => (
                      <label key={item.title} className="block cursor-pointer group">
                        <div className="relative overflow-hidden rounded-sm bg-[#eadbcc] h-44 w-full">
                          <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="mt-3 flex items-start gap-3">
                          <input type="checkbox" className="mt-1 h-4 w-4 accent-[#2c1a12]" />
                          <div>
                            <div className="text-sm font-medium text-[#2c1a12] sm:text-base">{item.title}</div>
                            <div className="mt-1 text-sm text-[#8c6a45]">{item.price}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="mt-10 rounded-md bg-[#1c140d] px-6 py-5 text-center text-sm text-[#e8d6bd] sm:text-base flex items-center justify-center gap-3">
                    <span className="text-[#d7b48a]">❦</span>
                    Final price may vary based on flower availability, color selection, and season.
                  </div>
                </div>
              </section>

              {/* Bottom CTA Section */}
              <section className="bg-black px-6 py-12 lg:py-16">
                <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
                  <h2 className="font-serif text-4xl text-[#f5eadc] sm:text-5xl">Create Something Beautiful Today.</h2>
                  <button className="bg-[#e3c59d] text-black px-12 py-4 text-sm font-bold tracking-widest hover:bg-[#d4b58e] transition">
                    ADD TO CART
                  </button>
                </div>
              </section>
            </>
          )}

          {page === 'gift' && (
            <section className="relative min-h-[90vh] bg-black px-6 py-16 text-center text-white flex flex-col items-center justify-center">
              <div className="absolute inset-0">
                <Image
                  src="/images/gift_sets_background.jpg"
                  alt="Gift Sets Background"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
              
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center flex-1 justify-center py-10">
                <h1 className="font-serif text-5xl tracking-[0.1em] text-[#f5eadc] sm:text-6xl drop-shadow-md">GIFT SETS</h1>
                <p className="font-script mt-4 text-3xl text-[#d7b48a] sm:text-4xl drop-shadow-md">Curated floral gifts for meaningful occasions.</p>
                
                <p className="mt-10 text-sm leading-7 text-white/90 max-w-lg sm:text-base drop-shadow-md">
                  We&apos;re thoughtfully designing exclusive gift sets that combine the beauty of fresh blooms with elegant touches. Each piece will be crafted to make every moment unforgettable.
                </p>

                <div className="mt-16 w-full">
                  <h2 className="font-serif text-3xl tracking-[0.15em] text-[#f5eadc] sm:text-4xl drop-shadow-md">LAUNCHING SOON</h2>
                  <p className="mt-3 text-[10px] font-bold tracking-[0.3em] text-[#d7b48a] uppercase drop-shadow-md">Be the first to experience our exclusive collection.</p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row border border-white/20 mx-auto max-w-md bg-black/40 backdrop-blur-md">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-transparent text-white px-5 py-4 flex-1 text-sm outline-none placeholder:text-white/60" 
                    />
                    <button className="bg-[#e3c59d] text-black text-xs font-bold px-8 py-4 tracking-[0.2em] hover:bg-[#d4b58e] transition">
                      NOTIFY ME
                    </button>
                  </div>
                  <p className="mt-4 text-[11px] italic text-white/60 drop-shadow-md">We&apos;ll only send you updates about our launch.</p>
                </div>

                <button 
                  onClick={() => setPage('home')}
                  className="mt-16 border border-white/20 px-8 py-3 text-[11px] font-bold tracking-[0.2em] text-white/80 hover:bg-white/10 hover:text-white transition backdrop-blur-sm"
                >
                  BACK TO HOME
                </button>
              </div>
            </section>
          )}

          {page === 'custom' && (
            <section className="relative min-h-[90vh] bg-black px-6 py-16 text-center text-white flex flex-col items-center justify-center">
              <div className="absolute inset-0">
                <Image
                  src="/images/custom_order_background.jpg"
                  alt="Custom Order Background"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
              
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center flex-1 justify-center py-10">
                <h1 className="font-serif text-5xl tracking-[0.1em] text-[#f5eadc] sm:text-6xl drop-shadow-md">CUSTOM ORDER</h1>
                <p className="font-script mt-4 text-3xl text-[#d7b48a] sm:text-4xl drop-shadow-md">Create something uniquely yours.</p>
                
                <div className="mt-8 text-[#d7b48a] drop-shadow-md">❦</div>

                <p className="mt-8 text-sm leading-7 text-white/90 max-w-lg sm:text-base drop-shadow-md">
                  We&apos;re preparing a personalized floral experience where you can design a bouquet tailored to your vision, style, and occasion. Every detail will be crafted with care.
                </p>

                <div className="mt-16 w-full">
                  <h2 className="font-serif text-3xl tracking-[0.15em] text-[#f5eadc] sm:text-4xl drop-shadow-md">AVAILABLE SOON</h2>
                  <p className="mt-3 text-[10px] font-bold tracking-[0.3em] text-[#d7b48a] uppercase drop-shadow-md">Custom creations, made just for you.</p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row border border-white/20 mx-auto max-w-md bg-black/40 backdrop-blur-md">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-transparent text-white px-5 py-4 flex-1 text-sm outline-none placeholder:text-white/60" 
                    />
                    <button className="bg-[#e3c59d] text-black text-xs font-bold px-8 py-4 tracking-[0.2em] hover:bg-[#d4b58e] transition">
                      NOTIFY ME
                    </button>
                  </div>
                  <p className="mt-4 text-[11px] italic text-white/60 drop-shadow-md">We&apos;ll only send you updates about our launch.</p>
                </div>

                <button 
                  onClick={() => setPage('home')}
                  className="mt-16 border border-white/20 px-8 py-3 text-[11px] font-bold tracking-[0.2em] text-white/80 hover:bg-white/10 hover:text-white transition backdrop-blur-sm"
                >
                  BACK TO HOME
                </button>
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
