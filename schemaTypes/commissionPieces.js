// /sanity/schemas/commissionPieces.js

export default {
  name: 'commissionPiece',
  title: 'Commission Piece',
  type: 'document', // This makes it a document type
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
