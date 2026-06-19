import { useEffect } from 'react'
import { SEO_PROJECTS, SITE_METADATA } from './siteMetadata.js'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertJsonLd(id, schema) {
  let element = document.head.querySelector(`#${id}`)

  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.id = id
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(schema)
}

const Seo = () => {
  useEffect(() => {
    const currentUrl = window.location.href
    const siteUrl = window.location.origin
    const imageUrl = new URL('/portfolio.png', siteUrl).href

    document.documentElement.lang = 'en'
    document.title = SITE_METADATA.title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: SITE_METADATA.description,
    })
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: SITE_METADATA.keywords.join(', '),
    })
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: SITE_METADATA.name,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    })
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: '#050505',
    })

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: SITE_METADATA.title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: SITE_METADATA.description,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: currentUrl,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: `${SITE_METADATA.name} portfolio preview`,
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_METADATA.title,
    })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: SITE_METADATA.title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: SITE_METADATA.description,
    })
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    })
    upsertMeta('meta[name="twitter:url"]', {
      name: 'twitter:url',
      content: currentUrl,
    })

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: currentUrl,
    })

    upsertJsonLd('person-schema', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_METADATA.name,
      url: siteUrl,
      image: imageUrl,
      email: SITE_METADATA.email,
      telephone: SITE_METADATA.phone,
      address: {
        '@type': 'PostalAddress',
        addressCountry: SITE_METADATA.location,
      },
      jobTitle: 'Full-Stack Developer',
      description: SITE_METADATA.description,
      sameAs: SITE_METADATA.socialLinks,
      knowsAbout: [
        'React',
        'Next.js',
        'React Native',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'JavaScript',
        'TypeScript',
        'UI/UX Design',
        'Mobile App Development',
      ],
    })

    upsertJsonLd('website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_METADATA.title,
      url: siteUrl,
      inLanguage: 'en',
      description: SITE_METADATA.description,
      author: {
        '@type': 'Person',
        name: SITE_METADATA.name,
      },
    })

    upsertJsonLd('collection-page-schema', {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: SITE_METADATA.title,
      url: currentUrl,
      description: SITE_METADATA.description,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: SEO_PROJECTS.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.name,
            description: project.description,
            url: project.url,
          },
        })),
      },
    })
  }, [])

  return null
}

export default Seo
