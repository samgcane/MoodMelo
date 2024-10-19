export default function sitemap() {
    return [
      {
        url: 'https://www.canecreative.co.uk',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://www.canecreative.co.uk/dashboard',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]
  }