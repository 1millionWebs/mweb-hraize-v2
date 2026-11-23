"use client";

import { usePathname } from "next/navigation";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hraize HR Analytics",
  alternateName: "Hraize",
  url: "https://hraize.com",
  logo: "https://hraize.com/logo.svg",
  description:
    "HR & Payroll services, recruitment solutions, business administration support, and website solutions across India.",
  slogan: "The right support to keep business moving.",
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXXXXXXX",
    contactType: "customer service",
    email: "info@hraize.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/hraize",
    "https://twitter.com/hraize",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  "/": [{ name: "Home", path: "/" }],
  "/about": [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ],
  "/careers": [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
  ],
  "/contact": [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ],
  "/services": [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services" },
  ],
  "/hr-services": [
    { name: "Home", path: "/" },
    { name: "HR & Payroll Services", path: "/hr-services" },
  ],
  "/recruitment": [
    { name: "Home", path: "/" },
    { name: "Recruitment Solutions", path: "/recruitment" },
  ],
  "/business-support": [
    { name: "Home", path: "/" },
    { name: "Business Administration Support", path: "/business-support" },
  ],
  "/website-solutions": [
    { name: "Home", path: "/" },
    { name: "Website Design & Development", path: "/website-solutions" },
  ],
  "/personnel-administration": [
    { name: "Home", path: "/" },
    { name: "HR & Personnel Administration", path: "/personnel-administration" },
  ],
  "/submit-resume": [
    { name: "Home", path: "/" },
    { name: "Submit Resume", path: "/submit-resume" },
  ],
  "/vacancies": [
    { name: "Home", path: "/" },
    { name: "Vacancies", path: "/vacancies" },
  ],
};

function getBreadcrumbForPath(pathname: string): BreadcrumbItem[] {
  // Try exact match first
  if (breadcrumbMap[pathname]) return breadcrumbMap[pathname];
  // Fallback: try matching the first segment
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 1) {
    const key = `/${segments[0]}`;
    if (breadcrumbMap[key]) return breadcrumbMap[key];
  }
  // Generic fallback
  return [
    { name: "Home", path: "/" },
    ...segments.map((seg, i) => ({
      name: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
      path: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];
}

function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://hraize.com${item.path}`,
    })),
  };
}

export default function JsonLd() {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbForPath(pathname);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}