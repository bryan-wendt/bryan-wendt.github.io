// Safe fallback for window.gtag across development mode and ad-blockers
if (typeof window !== 'undefined') {
  if (typeof window.gtag !== 'function') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}

export default function clientModule() {
  return {};
}
