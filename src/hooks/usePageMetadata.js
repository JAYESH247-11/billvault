import { useEffect } from 'react';

const updateMeta = (attribute, name, content) => {
  const selector = `meta[${attribute}="${name}"]`;
  let element = document.head.querySelector(selector);

  if (content == null) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.append(element);
  }

  element.setAttribute('content', content);
};

const updateCanonical = (pathname) => {
  const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
  const existingCanonical = document.head.querySelector('link[rel="canonical"]');

  if (!configuredSiteUrl) {
    existingCanonical?.remove();
    return null;
  }

  const siteUrl = new URL(configuredSiteUrl);
  if (siteUrl.protocol !== 'https:' && siteUrl.protocol !== 'http:') {
    throw new Error('VITE_SITE_URL must use the http or https protocol.');
  }

  const basePath = siteUrl.pathname.replace(/\/+$/, '');
  const routePath = pathname.startsWith(`${basePath}/`) || pathname === basePath
    ? pathname
    : `${basePath}${pathname}`;
  siteUrl.pathname = routePath || '/';
  siteUrl.search = '';
  siteUrl.hash = '';

  const canonical = existingCanonical ?? document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = siteUrl.href;
  if (!existingCanonical) {
    document.head.append(canonical);
  }

  return siteUrl.href;
};

const usePageMetadata = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    updateMeta('name', 'description', description);
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:type', 'website');
    updateMeta('property', 'og:site_name', 'Billvault');
    updateMeta('name', 'twitter:card', 'summary');
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    const canonicalUrl = updateCanonical(window.location.pathname);
    const currentPageUrl = new URL(window.location.pathname, window.location.origin);
    updateMeta('property', 'og:url', canonicalUrl ?? currentPageUrl.href);
  }, [description, title]);
};

export default usePageMetadata;
