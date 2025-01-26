export default {
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lineartPrice',
      title: 'Lineart Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'colourPrice',
      title: 'Colour Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'validUntil',
      title: 'Valid Until',
      type: 'datetime',
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
