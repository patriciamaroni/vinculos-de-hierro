
import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Preconnect to image CDN as early as possible to start the TCP handshake before requests
const addPreconnect = (href: string) => {
  if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};
addPreconnect("/cdn.magicpatterns.com");
addPreconnect('https://fonts.googleapis.com');
addPreconnect('https://fonts.gstatic.com');
// Preload the hero mockup (largest contentful paint candidate) so the browser fetches it in parallel with HTML/CSS
const preloadHero = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = "/Mockup.png";

  link.setAttribute('fetchpriority', 'high');
  document.head.appendChild(link);
};
preloadHero();
// Mark the document as Spanish so the browser doesn't auto-translate it.
// Browser auto-translation rewrites text nodes and breaks React's ability to
// update dynamic values (e.g. the live order total).
document.documentElement.lang = 'es';
render(<App />, document.getElementById('root'));
