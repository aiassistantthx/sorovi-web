import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { generateAlternates } from "@/lib/seo/alternates";

export const metadata = {
  title: "Terms of Service - Hyreel",
  description: "Read the terms and conditions for using the Hyreel platform",
  alternates: generateAlternates("/terms"),
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="bg-[var(--surface-dark)]/30">
        <div className="text-center">
          <Heading as="h1" className="mb-6">
            Terms of Service
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
                1. Acceptance of Terms
              </Heading>
              <Text variant="body" className="mb-4">
                By accessing or using Hyreel&apos;s AI video creation platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </Text>
              <Text variant="body">
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                2. Service Description
              </Heading>
              <Text variant="body" className="mb-4">
                Hyreel provides an AI-powered video creation platform that allows users to:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Generate video scripts using AI</li>
                <li>Create videos with AI avatars and voices</li>
                <li>Edit and customize video content</li>
                <li>Export and publish videos to various platforms</li>
                <li>Access templates, tools, and resources</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                3. Account Registration
              </Heading>
              <Text variant="body" className="mb-4">
                To use Hyreel, you must:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Be at least 13 years of age</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not share your account with others</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <Text variant="body">
                You are responsible for all activities that occur under your account.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                4. Subscription and Payment
              </Heading>
              <Heading as="h3" className="mb-3">
                4.1 Plans and Pricing
              </Heading>
              <Text variant="body" className="mb-4">
                Hyreel offers various subscription plans with different features and limitations. Current pricing is available on our pricing page. We reserve the right to change prices with 30 days notice.
              </Text>

              <Heading as="h3" className="mb-3">
                4.2 Billing
              </Heading>
              <Text variant="body" className="mb-4">
                Subscriptions are billed monthly or annually in advance. You authorize us to charge your payment method for all fees. If payment fails, we may suspend or terminate your account.
              </Text>

              <Heading as="h3" className="mb-3">
                4.3 Cancellation and Refunds
              </Heading>
              <Text variant="body">
                You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. We offer a 14-day money-back guarantee for new subscriptions.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                5. Content Ownership and License
              </Heading>
              <Heading as="h3" className="mb-3">
                5.1 Your Content
              </Heading>
              <Text variant="body" className="mb-4">
                You retain all ownership rights to the videos and content you create using Hyreel. You may use your content for any purpose, including commercial use.
              </Text>

              <Heading as="h3" className="mb-3">
                5.2 License to Hyreel
              </Heading>
              <Text variant="body" className="mb-4">
                By uploading content to Hyreel, you grant us a limited license to:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Store and process your content to provide the service</li>
                <li>Create backups for data protection</li>
                <li>Use anonymized, aggregated data to improve our AI models</li>
              </ul>

              <Heading as="h3" className="mb-3">
                5.3 Hyreel&apos;s Content
              </Heading>
              <Text variant="body">
                All templates, tools, software, and other materials provided by Hyreel remain our property. You may not copy, modify, or redistribute our content without permission.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                6. Acceptable Use Policy
              </Heading>
              <Text variant="body" className="mb-4">
                You agree not to use Hyreel to:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Create illegal, harmful, or offensive content</li>
                <li>Violate intellectual property rights</li>
                <li>Harass, threaten, or impersonate others</li>
                <li>Spread misinformation or deepfakes</li>
                <li>Attempt to hack, disrupt, or abuse our systems</li>
                <li>Use our service for spam or unauthorized marketing</li>
                <li>Resell or redistribute our services</li>
              </ul>
              <Text variant="body">
                We reserve the right to remove content and suspend accounts that violate this policy.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                7. AI-Generated Content
              </Heading>
              <Text variant="body" className="mb-4">
                Our AI models generate content based on your inputs. You acknowledge that:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>AI-generated content may not always be accurate or appropriate</li>
                <li>You are responsible for reviewing and approving all content</li>
                <li>We do not guarantee the quality or suitability of AI outputs</li>
                <li>You must ensure your use complies with all applicable laws</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                8. Service Availability
              </Heading>
              <Text variant="body">
                We strive to provide reliable service but do not guarantee uninterrupted access. We may modify, suspend, or discontinue features at any time. We are not liable for any downtime or service interruptions.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                9. Limitation of Liability
              </Heading>
              <Text variant="body" className="mb-4">
                To the maximum extent permitted by law:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Hyreel is provided &quot;as is&quot; without warranties of any kind</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the fees you paid in the past 12 months</li>
                <li>You use our service at your own risk</li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                10. Indemnification
              </Heading>
              <Text variant="body">
                You agree to indemnify and hold Hyreel harmless from any claims, damages, or expenses arising from your use of the service, your content, or your violation of these terms.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                11. Termination
              </Heading>
              <Text variant="body" className="mb-4">
                We may suspend or terminate your account if you:
              </Text>
              <ul className="space-y-2 mb-4 list-disc list-inside text-[var(--text-gray-300)]">
                <li>Violate these terms</li>
                <li>Engage in fraudulent activity</li>
                <li>Fail to pay subscription fees</li>
                <li>Create risk or legal liability for us</li>
              </ul>
              <Text variant="body">
                Upon termination, you will lose access to your account and content.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                12. Governing Law
              </Heading>
              <Text variant="body">
                These terms are governed by the laws of California, USA, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.
              </Text>
            </div>

            <div>
              <Heading as="h2" className="mb-4">
                13. Contact Information
              </Heading>
              <Text variant="body" className="mb-4">
                For questions about these terms, contact us at:
              </Text>
              <ul className="space-y-2 list-none text-[var(--text-gray-300)]">
                <li>Email: legal@hyreel.com</li>
                <li>Address: 123 Market Street, Suite 400, San Francisco, CA 94103</li>
              </ul>
            </div>
        </div>
      </Section>
    </>
  );
}
