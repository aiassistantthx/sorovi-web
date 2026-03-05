import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section spacing="xl" className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-green)]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-[var(--brand-primary)] to-[var(--accent-green)] bg-clip-text text-transparent">
            404
          </div>
        </div>

        {/* Error Message */}
        <Heading as="h1" className="mb-4">
          Page Not Found
        </Heading>
        <Text variant="large" className="mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </Text>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/">
            <Button size="lg">
              Go to Homepage
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="space-y-3">
          <Text variant="small" className="text-[var(--text-gray-500)] mb-4">
            Here are some helpful links instead:
          </Text>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/about" className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              About Us
            </Link>
            <Link href="/pricing" className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-[var(--brand-primary)] hover:text-[var(--accent-lime)] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
