import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ImageCarouselProps {
  images: string[];
  imageAltPrefix: string;
  initialIndex?: number;
  onClose: () => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, imageAltPrefix, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(images.length > 1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
      setShowSwipeHint(false);
    } else if (isRightSwipe) {
      goToPrevious();
      setShowSwipeHint(false);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((index) => index === 0 ? images.length - 1 : index - 1);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((index) => index === images.length - 1 ? 0 : index + 1);
      } else if (e.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const hintTimer = setTimeout(() => setShowSwipeHint(false), 5000);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
      clearTimeout(hintTimer);
    };
  }, [images.length, onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={imageAltPrefix}
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10"
        aria-label={t.carousel.close[lang]}
      >
        <X size={32} />
      </button>

      <button
        onClick={goToPrevious}
        className="absolute left-4 text-white hover:text-gold-400 transition-colors z-10 hidden md:block"
        aria-label={t.carousel.previousImage[lang]}
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 text-white hover:text-gold-400 transition-colors z-10 hidden md:block"
        aria-label={t.carousel.nextImage[lang]}
      >
        <ChevronRight size={48} />
      </button>

      {showSwipeHint && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 md:hidden animate-pulse">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
            <ChevronLeft size={16} />
            <span>{t.carousel.swipeToBrowse[lang]}</span>
            <ChevronRight size={16} />
          </div>
        </div>
      )}

      <div 
        className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center px-4 md:px-16 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`${imageAltPrefix} (${currentIndex + 1} of ${images.length})`}
          className="max-w-full max-h-full object-contain select-none"
          draggable={false}
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            type="button"
            aria-current={index === currentIndex ? 'true' : undefined}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-gold-400 w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`${t.carousel.goToImage[lang]} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
