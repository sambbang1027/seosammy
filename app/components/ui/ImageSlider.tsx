"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageSliderProps {
  images: string[];
  title: string;
  aspectClass?: string;
  showArrows?: boolean;
  playing?: boolean; // 외부에서 제어할 때 사용
}

export default function ImageSlider({
  images,
  title,
  aspectClass = "aspect-[16/10]",
  showArrows = true,
  playing,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [internalHover, setInternalHover] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number>(0);

  const isPlaying = playing !== undefined ? playing : internalHover;

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go(current === 0 ? images.length - 1 : current - 1);
  const next = () => go(current === images.length - 1 ? 0 : current + 1);

  useEffect(() => {
    if (isPlaying && images.length > 1) {
      intervalRef.current = setInterval(goNext, 900);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, goNext, images.length]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  if (images.length === 0) {
    return (
      <div className={`relative w-full ${aspectClass} rounded-xl overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8dcea] to-[#b8cfe0] flex items-center justify-center">
          <span className="text-white/60 text-[13px] font-mono">{title}</span>
        </div>
      </div>
    );
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,55,91,0.10)] group bg-[#f0f4f8]`}
      onMouseEnter={() => playing === undefined && setInternalHover(true)}
      onMouseLeave={() => playing === undefined && setInternalHover(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} ${current + 1}`}
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* 화살표 */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
          >
            <FiChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* dot indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-200 cursor-pointer ${
                i === current
                  ? "w-4 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
