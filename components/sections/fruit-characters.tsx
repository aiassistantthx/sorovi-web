'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layouts/section';
import { Container } from '@/components/layouts/container';
import { Heading, Text } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { fruitCharacters } from '@/lib/fruit-characters';

export function FruitCharactersSection() {
  return (
    <Section spacing="lg" className="bg-gray-50" container={false}>
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            AI-Generated Characters
          </Badge>
          <Heading as="h2" className="mb-4">
            3D Pixar-Style Characters
          </Heading>
          <Text variant="large" className="text-muted max-w-2xl mx-auto">
            Generate stunning animated videos with our collection of AI-powered 3D
            characters. Perfect for TikTok, Reels, and social media ads.
          </Text>
        </div>

        {/* Characters Grid - Vertical aspect ratio */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {fruitCharacters.map((character) => (
            <Card
              key={character.slug}
              variant="elevated"
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container - 9:16 aspect ratio */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: `${character.color}CC` }}
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Character emoji badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-2xl drop-shadow-lg">{character.emoji}</span>
                </div>

                {/* Character info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {character.name}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">
                    {character.personality}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/templates/fruit-character-animation"
              className="inline-flex items-center justify-center rounded-xl font-semibold px-8 py-4 text-lg transition-all duration-200 bg-[var(--brand-primary)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Create Your Video
            </Link>
            <Link
              href="/tools/text-to-video-ai"
              className="inline-flex items-center justify-center rounded-xl font-semibold px-8 py-4 text-lg transition-all duration-200 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
            >
              Try Text-to-Video
            </Link>
          </div>
          <Text className="text-muted mt-4">
            Generate unlimited animated videos with AI
          </Text>
        </div>
      </Container>
    </Section>
  );
}
