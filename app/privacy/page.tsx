import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata = {
  title: "Privacy Policy - Hyreel",
  description:
    "Learn how Hyreel collects, uses, and protects your personal information",
  alternates: generateAlternates("/privacy"),
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="text-center">
          <Heading as="h1" className="mb-6">
            Privacy Policy
          </Heading>
          <Text variant="large">
            Last updated: December 15, 2025
          </Text>
        </div>
      </Section>

      {/* Content */}
      <Section spacing="xl">
        <div className="space-y-8">
            <div>
              <Heading as="h2" className="mb-4">
                1. Introduction
              </Heading>
              <Text variant="body" className="mb-4">
                Welcome to Hyreel. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our AI video creation platform.
              </Text>
              <Text variant="body">
                By using Hyreel, you agree to the collection and use of information in accordance with this policy.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                2. Information We Collect
              </Heading>
              <Heading as="h3" className="mb-3">
                2.1 Information You Provide
              </Heading>
              <Text variant="body" className="mb-4">
                We collect information that you voluntarily provide to us, including:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Account information (name, email, password)</li>
                <li>Profile information and preferences</li>
                <li>Payment and billing information</li>
                <li>Content you create (scripts, videos, media)</li>
                <li>Communications with our support team</li>
              </ul>

              <Heading as="h3" className="mb-3">
                2.2 Automatically Collected Information
              </Heading>
              <Text variant="body" className="mb-4">
                When you use our service, we automatically collect:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (features used, time spent, interactions)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log data and analytics information</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                3. How We Use Your Information
              </Heading>
              <Text variant="body" className="mb-4">
                We use your information to:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Provide and maintain our AI video creation service</li>
                <li>Process your payments and manage your account</li>
                <li>Improve and personalize your experience</li>
                <li>Train and improve our AI models</li>
                <li>Send you updates, notifications, and marketing communications</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                4. AI and Machine Learning
              </Heading>
              <Text variant="body" className="mb-4">
                Hyreel uses AI technology to generate and edit videos. When you use our AI features:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Your content may be processed by our AI models to generate videos</li>
                <li>We may use aggregated, anonymized data to improve our AI models</li>
                <li>We do not use your personal videos to train our AI without explicit consent</li>
                <li>You retain full ownership of all content you create</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                5. Data Sharing and Disclosure
              </Heading>
              <Text variant="body" className="mb-4">
                We do not sell your personal information. We may share your data with:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Service providers who help us operate our platform</li>
                <li>Payment processors to handle transactions</li>
                <li>Analytics providers to understand usage patterns</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                6. Data Security
              </Heading>
              <Text variant="body" className="mb-4">
                We implement industry-standard security measures to protect your data:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure data centers and backups</li>
              </ul>
              <Text variant="body">
                However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                7. Your Rights and Choices
              </Heading>
              <Text variant="body" className="mb-4">
                You have the right to:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Export your content</li>
                <li>Opt out of marketing communications</li>
                <li>Disable cookies in your browser</li>
                <li>Object to certain data processing</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                8. Data Retention
              </Heading>
              <Text variant="body">
                We retain your personal data for as long as necessary to provide our services and comply with legal obligations. When you delete your account, we will delete or anonymize your data within 90 days, except where we must retain it for legal or security purposes.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                9. International Data Transfers
              </Heading>
              <Text variant="body">
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy and applicable laws, including GDPR and CCPA.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                10. Children's Privacy
              </Heading>
              <Text variant="body">
                Hyreel is not intended for users under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                11. Changes to This Policy
              </Heading>
              <Text variant="body">
                We may update this privacy policy from time to time. We will notify you of significant changes by email or through our platform. Your continued use of Hyreel after changes constitutes acceptance of the updated policy.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                12. Contact Us
              </Heading>
              <Text variant="body" className="mb-4">
                If you have questions about this privacy policy or your data, contact us at:
              </Text>
              <ul className="space-y-2 list-none text-[var(--text-gray-300)]">
                <li>Email: privacy@hyreel.com</li>
                <li>Address: 123 Market Street, Suite 400, San Francisco, CA 94103</li>
              </ul>
            </div>
        </div>
      </Section>
    </>
  );
}
