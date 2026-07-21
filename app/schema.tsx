import React from 'react';

// ============================================================================
// 1. Organization Schema (Rendered globally in the root layout.tsx)
// ============================================================================
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Selfera',
    'url': 'https://www.selfera.co.uk',
    'description': 'We develop custom AI powered operations and marketing automations for owner led SMEs to empower them to compete with larger companies.',
    // TODO: Replace with the permanent, absolute URL of your logo once fixed
    'logo': 'https://www.selfera.co.uk/logo.png', 
    'areaServed': {
      '@type': 'Country',
      'name': 'United Kingdom',
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'London',
      'addressCountry': 'GB',
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'contactType': 'customer support',
        'email': 'support@selfera.co.uk', // TODO: Update with support email
        'telephone': '+44-000-000-0000',  // TODO: Update with phone number
        'url': 'https://www.selfera.co.uk/contact',
      }
    ],
    'sameAs': [
      'https://www.linkedin.com/company/selfera' // TODO: Update with social profiles
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// 2. Service Schema (Rendered on individual service/solution pages)
// ============================================================================
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'AI Business & Marketing Automation',
    'provider': {
      '@type': 'Organization',
      'name': 'Selfera',
      'url': 'https://www.selfera.co.uk',
    },
    'name': name,
    'description': description,
    'url': url,
    'areaServed': {
      '@type': 'Country',
      'name': 'United Kingdom',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// 3. FAQ Schema (Rendered on pages containing FAQ accordions)
// ============================================================================
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  questions: FAQItem[];
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questions.map((q) => ({
      '@type': 'Question',
      'name': q.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
