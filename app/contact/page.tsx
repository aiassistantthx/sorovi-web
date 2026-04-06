import { Heading, Text } from "@/components/ui/typography";
import { Section } from "@/components/layouts/section";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact Us - Sorovi",
  description: "Get in touch with the Sorovi team. We're here to help with any questions.",
};

const contactMethods = [
  {
    icon: "📧",
    title: "Email Support",
    description: "Get help from our support team",
    contact: "support@sorovi.com",
    response: "24-48 hours",
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available in app",
    response: "Instant",
  },
  {
    icon: "📚",
    title: "Help Center",
    description: "Browse articles and tutorials",
    contact: "help.sorovi.com",
    response: "Self-service",
  },
  {
    icon: "🐦",
    title: "Social Media",
    description: "Follow us for updates",
    contact: "@sorovi",
    response: "Follow us",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <Heading as="h1" className="mb-6">
            Get in Touch
          </Heading>
          <Text variant="large">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Text>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section spacing="lg" className="bg-[var(--surface-light)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} variant="elevated" className="text-center">
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {method.title}
              </h3>
              <Text variant="small" className="mb-3">
                {method.description}
              </Text>
              <div className="text-[var(--brand-primary)] font-medium text-sm mb-1">
                {method.contact}
              </div>
              <Text variant="muted">{method.response}</Text>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Form */}
            <div>
              <Heading as="h2" className="mb-6">
                Send Us a Message
              </Heading>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your question or feedback..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <Heading as="h3" className="mb-4">
                  Quick Answers
                </Heading>
                <Card variant="elevated" className="mb-4">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                    Sales Inquiries
                  </h4>
                  <Text variant="small">
                    For business or enterprise plans, email{" "}
                    <a
                      href="mailto:sales@sorovi.com"
                      className="text-[var(--brand-primary)] hover:underline"
                    >
                      sales@sorovi.com
                    </a>
                  </Text>
                </Card>
                <Card variant="elevated" className="mb-4">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                    Technical Support
                  </h4>
                  <Text variant="small">
                    For technical issues, use the live chat in the app or email{" "}
                    <a
                      href="mailto:support@sorovi.com"
                      className="text-[var(--brand-primary)] hover:underline"
                    >
                      support@sorovi.com
                    </a>
                  </Text>
                </Card>
                <Card variant="elevated">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">
                    Press & Media
                  </h4>
                  <Text variant="small">
                    For press inquiries, contact{" "}
                    <a
                      href="mailto:press@sorovi.com"
                      className="text-[var(--brand-primary)] hover:underline"
                    >
                      press@sorovi.com
                    </a>
                  </Text>
                </Card>
              </div>
            </div>
        </div>
      </Section>

      {/* FAQ CTA */}
      <Section spacing="xl" className="bg-[var(--surface-light)]">
        <div className="text-center">
          <Heading as="h2" className="mb-6">
            Looking for Quick Answers?
          </Heading>
          <Text variant="large" className="mb-8">
            Check out our FAQ page for answers to common questions about Sorovi
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary">
              View FAQ
            </Button>
            <Button size="lg" variant="ghost">
              Help Center
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
