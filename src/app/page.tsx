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
      image: '/images/classic_red_roses_1776427660541.webp',
      targetPage: 'signature'
    },
    {
      title: 'Gift Sets',
      subtitle: 'Curated floral gifts for meaningful occasions.',
      cta: 'EXPLORE',
      image: '/images/gift_sets_black_box_1776427689237.webp',
      targetPage: 'gift'
    },
    {
      title: 'Custom Order',
      subtitle: 'Create your own personalized bouquet.',
      cta: 'START ORDER',
      image: '/images/white_roses_custom_1776427706759.webp',
      targetPage: 'custom'
    },
  ];

  const gallery = [
    '/images/mixed_pastel_roses_1776427722728.webp',
    '/images/home_hero_white_roses_tag.webp',
    '/images/classic_red_roses_1776427660541.webp',
    '/images/white_roses_custom_1776427706759.webp',
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
                      src="/images/home_hero_white_roses_tag.webp"
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
                    src="/images/floral_shadow_bg.webp"
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
                        src="/images/classic_red_roses_1776427660541.webp"
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
                        src="/images/mixed_pastel_roses_1776427722728.webp"
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
                        src="/images/teddy_bear_bouquet_1776427738683.webp"
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
                        image: '/images/classic_red_roses_1776427660541.webp',
                      },
                      {
                        title: 'Ribbon Personalization',
                        price: '+$10.00',
                        image: '/images/gift_sets_black_box_1776427689237.webp',
                      },
                      {
                        title: 'Glitter Decoration',
                        price: '+$10.00',
                        image: '/images/home_hero_white_roses_tag.webp',
                      },
                      {
                        title: 'Greeting Card',
                        price: '+$5.00',
                        image: '/images/mixed_pastel_roses_1776427722728.webp',
                      },
                      {
                        title: 'Round Bouquet Base',
                        price: '+$30.00',
                        image: '/images/teddy_bear_bouquet_1776427738683.webp',
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
            <div className="bg-[#0a0502] min-h-screen text-white">
              {/* Header */}
              <section className="relative overflow-hidden px-6 py-20 lg:px-10 flex flex-col items-center text-center border-b border-white/5">
                <div className="absolute inset-0">
                  <Image
                    src="/images/gift_sets_background.webp"
                    alt="Gift Sets Background"
                    fill
                    priority
                    className="object-cover object-center opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-[#0a0502]/50 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto pt-10">
                  <h1 className="font-serif text-5xl tracking-[0.1em] text-[#f5eadc] sm:text-6xl drop-shadow-md">GIFT SETS</h1>
                  <p className="font-script mt-6 text-3xl text-[#d7b48a] sm:text-4xl drop-shadow-md">Curated pairings for unforgettable moments.</p>
                  <p className="mt-8 text-sm leading-7 text-white/60 max-w-xl mx-auto sm:text-base drop-shadow-md">
                    Elevate your floral gift with our exclusive pairings. From vintage champagne to luxury spa retreats, each set is designed to create a complete sensory experience.
                  </p>
                </div>
              </section>

              {/* Product Catalog */}
              <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 space-y-20 lg:space-y-32">
                
                {/* Product 1: Noir Celebration */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#130a05] border border-white/5 p-6 sm:p-10 lg:p-12">
                  <div className="relative aspect-square w-full overflow-hidden shadow-2xl border border-white/10">
                    <Image 
                      src="/images/gift_set_champagne.webp"
                      alt="The Noir Celebration Set"
                      fill
                      className="object-cover object-center hover:scale-105 transition duration-1000"
                    />
                  </div>
                  <div className="flex flex-col items-start text-left lg:pl-10">
                    <h2 className="font-serif text-4xl text-[#f5eadc]">The Noir Celebration Set</h2>
                    <p className="mt-4 text-[#d7b48a] italic font-serif text-lg tracking-wide">Deep Red Roses • Moët & Chandon • Chocolates</p>
                    <p className="mt-6 text-sm leading-7 text-white/60">
                      Our signature black velvet box overflowing with the deepest red premium roses. Paired seamlessly with a chilled bottle of Moët & Chandon champagne and a box of Noir Chocolatier&apos;s finest gold-leaf truffles. The ultimate gesture of romance and celebration.
                    </p>
                    <div className="mt-10 flex items-center justify-between w-full border-t border-white/10 pt-8">
                      <p className="text-2xl font-serif text-[#f5eadc]">$350.00</p>
                      <button className="bg-[#e3c59d] text-black px-10 py-4 text-[10px] font-bold tracking-[0.2em] hover:bg-[#d4b58e] transition shadow-[0_0_20px_rgba(227,197,157,0.2)]">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 2: Botanical Spa */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#130a05] border border-white/5 p-6 sm:p-10 lg:p-12">
                  <div className="order-2 lg:order-1 flex flex-col items-start text-left lg:pr-10">
                    <h2 className="font-serif text-4xl text-[#f5eadc]">The Botanical Spa Retreat</h2>
                    <p className="mt-4 text-[#d7b48a] italic font-serif text-lg tracking-wide">Pastel Roses • Botanical Soak • Candle • Silk Mask</p>
                    <p className="mt-6 text-sm leading-7 text-white/60">
                      A serene escape captured in a box. A pristine white acrylic vessel showcasing delicate blush and white roses, paired with luxury Aura Botanica rose and sandalwood bath salts, a poured amber candle, and a pure silk sleep mask. Perfect for birthdays, Mother&apos;s Day, or self-care.
                    </p>
                    <div className="mt-10 flex items-center justify-between w-full border-t border-white/10 pt-8">
                      <p className="text-2xl font-serif text-[#f5eadc]">$280.00</p>
                      <button className="bg-[#e3c59d] text-black px-10 py-4 text-[10px] font-bold tracking-[0.2em] hover:bg-[#d4b58e] transition shadow-[0_0_20px_rgba(227,197,157,0.2)]">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative aspect-square w-full overflow-hidden shadow-2xl border border-white/10">
                    <Image 
                      src="/images/gift_set_spa.webp"
                      alt="The Botanical Spa Retreat"
                      fill
                      className="object-cover object-center hover:scale-105 transition duration-1000"
                    />
                  </div>
                </div>

              </section>
            </div>
          )}

          {page === 'custom' && (
            <div className="bg-[#0a0502] min-h-screen text-white">
              {/* Header */}
              <section className="relative overflow-hidden px-6 py-20 lg:px-10 flex flex-col items-center text-center">
                <div className="relative z-10 max-w-3xl mx-auto pt-10">
                  <h1 className="font-serif text-5xl tracking-[0.1em] text-[#f5eadc] sm:text-6xl drop-shadow-md">CUSTOM ORDER</h1>
                  <p className="font-script mt-6 text-3xl text-[#d7b48a] sm:text-4xl drop-shadow-md">Create something uniquely yours.</p>
                  <p className="mt-8 text-sm leading-7 text-white/60 max-w-xl mx-auto sm:text-base drop-shadow-md">
                    Design a bespoke floral arrangement tailored to your exact vision. Follow the steps below to curate your perfect luxury box.
                  </p>
                </div>
              </section>

              {/* Steps Layout */}
              <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 pb-24 space-y-20">
                
                {/* Step 1 */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#130a05] border border-white/5 p-8 lg:p-12">
                  <div className="relative aspect-square w-full overflow-hidden shadow-2xl">
                    <Image 
                      src="/images/custom_empty_box.webp"
                      alt="Choose Your Vessel"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col items-start text-left lg:pl-8">
                    <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d7b48a] mb-4">Step 01</h3>
                    <h2 className="font-serif text-4xl text-[#f5eadc]">Choose Your Vessel</h2>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      Select the foundation of your arrangement. Our signature velvet boxes offer a classic, moody romance, while our clear acrylic designs provide a modern, unobstructed view of the blooms.
                    </p>
                    
                    <div className="mt-8 w-full space-y-3">
                      <button className="w-full flex justify-between items-center border border-[#d7b48a] bg-[#d7b48a]/10 px-6 py-4 transition">
                        <span className="font-serif text-lg tracking-wide text-[#f5eadc]">Classic Round Velvet</span>
                        <span className="text-xs text-[#d7b48a] tracking-widest uppercase">Selected</span>
                      </button>
                      <button className="w-full flex justify-between items-center border border-white/10 hover:border-white/30 px-6 py-4 transition text-white/60 hover:text-white">
                        <span className="font-serif text-lg tracking-wide">Square Acrylic Case</span>
                      </button>
                      <button className="w-full flex justify-between items-center border border-white/10 hover:border-white/30 px-6 py-4 transition text-white/60 hover:text-white">
                        <span className="font-serif text-lg tracking-wide">Signature Heart Velvet</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#130a05] border border-white/5 p-8 lg:p-12">
                  <div className="order-2 lg:order-1 flex flex-col items-start text-left">
                    <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d7b48a] mb-4">Step 02</h3>
                    <h2 className="font-serif text-4xl text-[#f5eadc]">Curate Your Palette</h2>
                    <p className="mt-4 text-sm leading-7 text-white/60">
                      Select the perfect hue to convey your message. We source only the finest, longest-lasting premium roses from the volcanic soils of Ecuador.
                    </p>
                    
                    <div className="mt-8 w-full grid grid-cols-2 gap-3">
                      <button className="flex flex-col items-center justify-center border border-white/10 hover:border-[#d7b48a]/50 bg-black/40 px-4 py-6 transition text-white/60 hover:text-[#f5eadc]">
                        <div className="w-8 h-8 rounded-full bg-[#6a0d20] mb-3 shadow-inner"></div>
                        <span className="text-[11px] font-bold tracking-widest uppercase">Deep Red</span>
                      </button>
                      <button className="flex flex-col items-center justify-center border border-white/10 hover:border-[#d7b48a]/50 bg-black/40 px-4 py-6 transition text-white/60 hover:text-[#f5eadc]">
                        <div className="w-8 h-8 rounded-full bg-[#fdfbf7] mb-3 shadow-inner"></div>
                        <span className="text-[11px] font-bold tracking-widest uppercase">Pure White</span>
                      </button>
                      <button className="flex flex-col items-center justify-center border border-[#d7b48a] bg-[#d7b48a]/5 px-4 py-6 transition text-[#f5eadc]">
                        <div className="w-8 h-8 rounded-full bg-[#fcd4c7] mb-3 shadow-inner ring-2 ring-[#d7b48a] ring-offset-2 ring-offset-[#130a05]"></div>
                        <span className="text-[11px] font-bold tracking-widest uppercase">Blush Pink</span>
                      </button>
                      <button className="flex flex-col items-center justify-center border border-white/10 hover:border-[#d7b48a]/50 bg-black/40 px-4 py-6 transition text-white/60 hover:text-[#f5eadc]">
                        <div className="w-8 h-8 rounded-full bg-[#e8b5a2] mb-3 shadow-inner"></div>
                        <span className="text-[11px] font-bold tracking-widest uppercase">Soft Peach</span>
                      </button>
                    </div>

                    <button className="mt-12 bg-[#e3c59d] text-black w-full px-12 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[#d4b58e] transition shadow-[0_0_20px_rgba(227,197,157,0.3)]">
                      REVIEW & CHECKOUT — $250.00
                    </button>
                  </div>
                  <div className="order-1 lg:order-2 relative aspect-square w-full overflow-hidden shadow-2xl">
                    <Image 
                      src="/images/custom_rose_palette.webp"
                      alt="Curate Your Palette"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

              </section>
            </div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* Global Luxury Footer */}
      <footer className="bg-[#0a0502] text-[#f5eadc] border-t border-white/10 pt-16 pb-8 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: Brand */}
            <div className="flex flex-col items-start">
              <h2 className="font-serif text-3xl tracking-[0.1em] text-[#e3c59d]">LOVÉN</h2>
              <p className="mt-4 text-xs leading-6 text-white/60 max-w-xs">
                More than flowers. We curate breathtaking, luxury floral experiences designed to capture your most unforgettable moments.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="text-white/60 hover:text-[#e3c59d] transition">
                  {/* Instagram Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-[#e3c59d] transition">
                  {/* Twitter/X Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </a>
                <a href="#" className="text-white/60 hover:text-[#e3c59d] transition">
                  {/* Facebook Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Collections */}
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">Collections</h3>
              <ul className="space-y-4 text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">
                <li><button onClick={() => setPage('signature')} className="hover:text-[#e3c59d] transition">Signature Bouquets</button></li>
                <li><button onClick={() => setPage('gift')} className="hover:text-[#e3c59d] transition">Gift Sets</button></li>
                <li><button onClick={() => setPage('custom')} className="hover:text-[#e3c59d] transition">Custom Orders</button></li>
                <li><button onClick={() => setPage('home')} className="hover:text-[#e3c59d] transition">Home Decor</button></li>
              </ul>
            </div>

            {/* Column 3: Client Care */}
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">Client Care</h3>
              <ul className="space-y-4 text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">
                <li><button className="hover:text-[#e3c59d] transition">Contact Us</button></li>
                <li><button className="hover:text-[#e3c59d] transition">Delivery Information</button></li>
                <li><button className="hover:text-[#e3c59d] transition">Return Policy</button></li>
                <li><button className="hover:text-[#e3c59d] transition">Flower Care Guide</button></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">Stay Connected</h3>
              <p className="text-xs leading-5 text-white/60 mb-4">
                Subscribe to our newsletter for exclusive previews, floral care tips, and private event invitations.
              </p>
              <div className="flex border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-white px-4 py-3 flex-1 text-xs outline-none placeholder:text-white/40" 
                />
                <button className="bg-[#e3c59d] text-black px-4 py-3 text-[10px] font-bold tracking-[0.2em] hover:bg-[#d4b58e] transition">
                  JOIN
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
            <p>© 2026 LOVÉN. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white/80 transition">Privacy Policy</button>
              <button className="hover:text-white/80 transition">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
