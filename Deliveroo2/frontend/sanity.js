import SanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = SanityClient({
  projectId: 'jmzwb4fh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
})

const builder = ImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client
