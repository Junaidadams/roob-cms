// pricing.js
export default {
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: ['USD', 'ZAR', 'EUR'],
      },
      validation: (Rule) => Rule.required(),
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
  ],
}
