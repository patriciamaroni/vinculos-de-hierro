import React, { useEffect, Suspense, lazy, createElement } from 'react';
import { HeroSection } from './components/HeroSection';
import { OrderProvider } from './stores/orderStore';
// Lazy-load everything below the fold so the Hero paints first
const ProblemSection = lazy(() =>
import('./components/ProblemSection').then((m) => ({
  default: m.ProblemSection
}))
);
const VisionSection = lazy(() =>
import('./components/VisionSection').then((m) => ({
  default: m.VisionSection
}))
);
const BeneficiosSection = lazy(() =>
import('./components/MechanismSection').then((m) => ({
  default: m.BeneficiosSection
}))
);
const BonusSection = lazy(() =>
import('./components/BonusSection').then((m) => ({
  default: m.BonusSection
}))
);
const OfferSection = lazy(() =>
import('./components/OfferSection').then((m) => ({
  default: m.OfferSection
}))
);
const UpsellSection = lazy(() =>
import('./components/UpsellSection').then((m) => ({
  default: m.UpsellSection
}))
);
const TestimonialsSection = lazy(() =>
import('./components/TestimonialsSection').then((m) => ({
  default: m.TestimonialsSection
}))
);
const TrustSection = lazy(() =>
import('./components/TrustSection').then((m) => ({
  default: m.TrustSection
}))
);
const FAQSection = lazy(() =>
import('./components/FAQSection').then((m) => ({
  default: m.FAQSection
}))
);
const CTASection = lazy(() =>
import('./components/CTASection').then((m) => ({
  default: m.CTASection
}))
);
const Footer = lazy(() =>
import('./components/Footer').then((m) => ({
  default: m.Footer
}))
);
const StickyMobileCTA = lazy(() =>
import('./components/StickyMobileCTA').then((m) => ({
  default: m.StickyMobileCTA
}))
);
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}
// Minimal fallback so layout doesn't jump while a chunk loads
const SectionFallback = () => <div className="min-h-[200px]" aria-hidden />;
export function App() {
  useEffect(() => {
    // Defer Meta Pixel until the browser is idle so it doesn't block first paint
    const initPixel = () => {
      if (window.fbq) return;
      const n: any = window.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) :
        n.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      const t = document.createElement('script');
      t.async = true;
      t.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(t);
      window.fbq('init', '987686134426392');
      window.fbq('track', 'PageView');
    };
    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(initPixel, {
        timeout: 2000
      });
    } else {
      setTimeout(initPixel, 1500);
    }
  }, []);
  return (
    <OrderProvider>
      <div className="min-h-screen bg-navy-900 font-sans text-white">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <ProblemSection />
          <VisionSection />
          <BeneficiosSection />
          <BonusSection />
          <OfferSection />
          <UpsellSection />
          <TestimonialsSection />
          <TrustSection />
          <FAQSection />
          <CTASection />
          <Footer />
          <StickyMobileCTA />
        </Suspense>
      </div>
    </OrderProvider>);

}
