import sanityClient from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.SANITY_DATASET || 'production', // Adjust as needed
  useCdn: false, // Avoid caching issues
  token: process.env.SANITY_API_TOKEN, // Required for write operations
})

const commissionPieces = [
  {
    _type: 'commissionPiece',
    title: 'Starry Night Portrait',
    artist: 'Vincent Artworks',
    price: 120,
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-uniqueID-asset', // Upload image first & replace with actual ID
      },
    },
  },
  {
    _type: 'commissionPiece',
    title: 'Minimalist Abstract',
    artist: 'Ava Designs',
    price: 80,
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-uniqueID-asset',
      },
    },
  },
]

async function seedData() {
  try {
    for (const piece of commissionPieces) {
      const response = await client.create(piece)
      console.log(`Created document: ${response._id}`)
    }
    console.log('Seeding completed!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedData()
