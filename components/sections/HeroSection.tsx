"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { CalendlyCta } from "@/components/calendly/CalendlyCta";
import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";
import { carouselConfig, company, heroSlides } from "@/lib/content";

const SLIDE_COUNT = heroSlides.length;

/**
 * Hero carousel.
 *
 * Three slides, 5s auto-advance, wrapping infinitely in both directions.
 * Auto-advance can be paused, and is off by default for visitors who have asked
 * their OS for reduced motion (WCAG 2.2.2 — Pause, Stop, Hide).
 *
 * Two details keep it from being the usual jumpy rotating hero:
 *
 * 1. Every slide sits in the same grid cell (`.carousel-slide` in globals.css),
 *    so the frame is always sized by the *tallest* slide. Nothing reflows or
 *    shifts as it rotates, at any breakpoint.
 * 2. The hotline below the carousel is static, not part of a slide, so the most
 *    actionable line on the page never moves.
 *
 * `run` increments on every change. It is both the auto-play effect dependency
 * (so a manual click restarts the timer) and the progress bar's React key (so
 * the CSS animation replays), which keeps the two exactly in step.
 */
export function HeroSection() {
  const [{ index: activeIndex, run }, setCarouselState] = useState({
    index: 0,
    run: 0,
  });

  /**
   * Reduced motion is treated as "already paused" rather than a separate flag,
   * so the visible control still works for anyone who wants to opt back in.
   */
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) setPaused(true);

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setPaused(true);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback((delta: number) => {
    setCarouselState((prev) => ({
      index: (prev.index + delta + SLIDE_COUNT) % SLIDE_COUNT,
      run: prev.run + 1,
    }));
  }, []);

  const goTo = useCallback((target: number) => {
    setCarouselState((prev) => ({
      index: (target + SLIDE_COUNT) % SLIDE_COUNT,
      run: prev.run + 1,
    }));
  }, []);

  const goNext = useCallback(() => advance(1), [advance]);
  const goPrev = useCallback(() => advance(-1), [advance]);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setCarouselState((prev) => ({
        index: (prev.index + 1) % SLIDE_COUNT,
        run: prev.run + 1,
      }));
    }, carouselConfig.autoplayMs);

    return () => window.clearInterval(timer);
  }, [run, paused]);

  return (
    <section className="bg-gradient-to-b from-midnight to-midnight-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="grid w-full">
              {heroSlides.map((slide, i) => {
                const isActive = i === activeIndex;
                // Slide 1 owns the page <h1>; the rest are <h2>.
                const Heading = (i === 0 ? "h1" : "h2") as "h1" | "h2";

                return (
                  <div
                    key={slide.id}
                    aria-hidden={!isActive}
                    className={cn("carousel-slide", isActive && "is-active")}
                  >
                    <div className="flex flex-col items-start gap-5">
                      <SectionEyebrow spaced={false} tone="onDark">
                        {slide.eyebrow}
                      </SectionEyebrow>

                      <Heading className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-white">
                        {slide.title}
                      </Heading>

                      <p className="text-slate-300 text-[15px] sm:text-[17px] leading-[1.65] max-w-2xl">
                        {slide.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3.5">
                        <CalendlyCta
                          source={`hero_${slide.id}`}
                          fallbackHref={slide.primaryCta.href}
                          className="flex items-center gap-2 px-6 py-3 rounded-md bg-white text-midnight font-semibold text-sm transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft group"
                        >
                          <span>{slide.primaryCta.label}</span>
                          <MaterialSymbol
                            name={slide.primaryCta.icon}
                            className="text-[18px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </CalendlyCta>
                        <a
                          className="px-6 py-3 rounded-md border border-white/25 text-white font-semibold text-sm transition-colors hover:bg-white/10 hover:border-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                          href={slide.secondaryCta.href}
                        >
                          {slide.secondaryCta.label}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Static, so it never moves between rotations. */}
            <p className="mt-7 text-[13px] text-slate-400">
              Direct Hotline:{" "}
              <a
                className="font-semibold text-white transition-colors hover:text-accent-soft"
                href={company.phoneHref}
              >
                {company.phoneDisplay}
              </a>
              <span className="mx-2 text-white/20">|</span>
              {company.supportHours}
            </p>
          </div>

          {/* Media. Every slide shares one aspect ratio, so they simply stack
              and cross-fade in place. */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10 bg-white/5">
              {heroSlides.map((slide, i) => (
                <Image
                  key={slide.id}
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  // Eager, so a rotation never reveals a blank frame — the hidden
                  // slides are `visibility: hidden`, and lazy images do not
                  // reliably load while hidden.
                  //
                  // Known trade-off: next/image also emits a <link rel=preload>
                  // for eager images, and its computed width (based on an assumed
                  // DPR) does not always match the srcset candidate the browser
                  // settles on, so the first hero image can be fetched twice —
                  // roughly 30 KB. That is a far smaller cost than a carousel
                  // that shows empty frames, so it is accepted deliberately.
                  loading="eager"
                  className={cn(
                    "object-cover transition-opacity duration-500",
                    i === activeIndex ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5 sm:gap-7">
            {heroSlides.map((slide, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={cn(
                    "group text-left focus:outline-none",
                    !isActive && "opacity-60 transition-opacity hover:opacity-100",
                  )}
                >
                  <span
                    className={cn(
                      // The three labels need ~570px side by side, so they only
                      // appear once there is room for them.
                      "hidden lg:block text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors group-hover:text-white",
                      isActive ? "text-white" : "text-slate-400",
                    )}
                  >
                    {slide.indicatorLabel}
                  </span>
                  <div className="lg:mt-2 h-1 w-16 sm:w-24 rounded-full bg-white/15 overflow-hidden">
                    <div
                      // Remounting on `run` replays the CSS keyframes.
                      key={`progress-${run}`}
                      className={cn(
                        "h-full w-full origin-left rounded-full bg-accent-soft",
                        isActive
                          ? paused
                            ? "scale-x-100"
                            : "progress-bar-active"
                          : "scale-x-0",
                      )}
                      style={
                        isActive && !paused
                          ? { animationDuration: `${carouselConfig.autoplayMs}ms` }
                          : undefined
                      }
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={paused ? "Play carousel" : "Pause carousel"}
              aria-pressed={paused}
              onClick={() => setPaused((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
            >
              <MaterialSymbol
                name={paused ? "play_arrow" : "pause"}
                className="text-[20px]"
              />
            </button>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
            >
              <MaterialSymbol name="chevron_left" className="text-[20px]" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
            >
              <MaterialSymbol name="chevron_right" className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
