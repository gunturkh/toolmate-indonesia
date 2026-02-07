/**
 * Centralized SEO Configuration
 *
 * Update these values to customize your site's SEO metadata.
 * All pages will inherit from defaultSEO unless overridden.
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}

// Base site information
export const siteConfig = {
  name: 'PT. Toolmate Technologies Indonesia',
  shortName: 'Toolmate Indonesia',
  url: 'https://toolmate-indonesia.com', // Update with your actual domain
  locale: 'id_ID',
  defaultImage: '/images/og-default.jpg', // Create this image (1200x630px recommended)
  twitterHandle: '@toolmateid', // Update if you have Twitter
  phone: '+62 822-9868-3313',
  email: 'toolmate.pttti@gmail.com',
  address: {
    street: 'Jl. Nagoya Hill Blok R3 No 6-7, Lubuk Baja Kota, Kec. Lubuk Baja',
    city: 'Kota Batam',
    region: 'Kepulauan Riau',
    postalCode: '29444',
    country: 'ID',
  },
};

// Default SEO for all pages
export const defaultSEO: SEOData = {
  title: 'HVAC & WTP Specialist in Batam',
  description:
    'PT Toolmate Enviro Indonesia - Your trusted partner for HVAC systems, Waste Treatment Plants (WTP), industrial fabrication, and M&E engineering in Batam, Indonesia. Serving manufacturing industries since 2016.',
  keywords: [
    'HVAC Batam',
    'WTP Batam',
    'waste treatment plant',
    'industrial HVAC',
    'M&E contractor Batam',
    'clean room systems',
    'ducting fabrication',
    'water treatment plant',
    'general contractor Batam',
    'PT Toolmate Enviro Indonesia',
    'industrial engineering Batam',
    'MBR system',
    'MBBR system',
  ],
  type: 'website',
};

// Page-specific SEO overrides
export const pageSEO: Record<string, SEOData> = {
  home: {
    title: 'HVAC & WTP Specialist in Batam',
    description:
      'PT Toolmate Enviro Indonesia - Leading provider of HVAC systems, Waste Treatment Plants (WTP), and industrial M&E solutions in Batam. Serving multinational clients since 2016.',
    keywords: [
      ...defaultSEO.keywords!,
      'industrial solutions Batam',
      'environmental engineering',
    ],
  },

  services: {
    title: 'Engineering Services - HVAC, WTP, M&E',
    description:
      'Comprehensive industrial engineering services: HVAC & MVAC systems, Waste Treatment Plants, ducting fabrication, clean room systems, and general contracting in Batam Indonesia.',
    keywords: [
      'HVAC services Batam',
      'WTP design',
      'ducting installation',
      'cooling tower service',
      'exhaust duct systems',
      'epoxy flooring Batam',
      'steel structure fabrication',
      'chiller installation',
    ],
  },

  products: {
    title: 'Biology Genesis - Natural Wastewater Treatment',
    description:
      'Biology Genesis - Natural bio-technology solution for industrial waste water treatment. Safe, non-toxic bacterial culture for WTP, STP, and grease traps.',
    keywords: [
      'Biology Genesis',
      'bio wastewater treatment',
      'natural WTP solution',
      'bacterial water treatment',
      'grease trap treatment',
      'STP bacteria',
      'POME treatment',
      'Biology Genesis',
    ],
    type: 'product',
  },

  projects: {
    title: 'Project References & Portfolio',
    description:
      'View our completed projects for multinational clients including Caterpillar, Panasonic, Yokogawa, and more. HVAC, WTP, civil works, and M&E installations in Batam.',
    keywords: [
      'Toolmate projects',
      'industrial projects Batam',
      'HVAC project reference',
      'WTP installation',
      'Caterpillar contractor',
      'Panasonic contractor Batam',
    ],
  },

  brands: {
    title: 'LED Lighting Brands - Official Distributor',
    description:
      'Official distributor for Prisled LED lighting brand in Batam. Premium LED bulbs, downlights, panels, floodlights and industrial lighting solutions.',
    keywords: [
      'LED lighting Batam',
      'Prisled distributor',
      'LED bulbs Batam',
      'industrial lighting',
      'LED downlight',
      'LED panel',
      'LED floodlight',
    ],
  },

  prisled: {
    title: 'Prisled LED Lighting - Innovative Solutions',
    description:
      'Prisled LED lighting products for commercial and industrial applications. LED bulbs, downlights, panels, floodlights and more. Official distributor in Batam.',
    keywords: [
      'Prisled LED',
      'LED lighting Batam',
      'commercial LED',
      'industrial lighting',
      'LED downlight',
      'LED panel',
      'LED floodlight',
    ],
    type: 'product',
  },
};

// Structured data for organization (JSON-LD)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  description: defaultSEO.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    contactType: 'sales',
    availableLanguage: ['Indonesian', 'English'],
  },
  sameAs: [
    // Add your social media URLs here
    // 'https://www.facebook.com/toolmateindonesia',
    // 'https://www.linkedin.com/company/toolmate-indonesia',
  ],
};

// Structured data for local business
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#business`,
  name: siteConfig.name,
  image: `${siteConfig.url}/images/og-default.jpg`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 1.13, // Update with exact coordinates
    longitude: 104.0016,
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  areaServed: {
    '@type': 'City',
    name: 'Batam',
  },
};

// Helper to get SEO for a page
export function getPageSEO(page: string): SEOData {
  return pageSEO[page] || defaultSEO;
}

// Helper to generate full title
export function getFullTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteConfig.name}`;
}
