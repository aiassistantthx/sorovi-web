import * as React from "react";
import Link from "next/link";
import { Container } from "./container";

const footerLinks = {
  product: [
    { label: "Tools", href: "/tools" },
    { label: "Templates", href: "/templates" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  download: [
    { label: "iOS App", href: process.env.NEXT_PUBLIC_APP_STORE_URL || "#" },
    { label: "Android App", href: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "#" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-dark)] border-t border-white/10">
      <Container>
        <div className="py-12 md:py-16">
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-gray-300)] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-gray-300)] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-gray-300)] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download */}
            <div>
              <h3 className="text-white font-semibold mb-4">Download</h3>
              <ul className="space-y-3">
                {footerLinks.download.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-gray-300)] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Logo & Copyright */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="text-xl font-bold bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-pink)] bg-clip-text text-transparent">
                  Sorovi
                </div>
                <span className="text-[var(--text-gray-500)] text-sm">
                  © {currentYear} Sorovi. All rights reserved.
                </span>
              </div>

              {/* Social Links (placeholder) */}
              <div className="flex items-center space-x-4">
                <span className="text-[var(--text-gray-500)] text-sm">
                  Follow us
                </span>
                {/* Add social icons here */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
