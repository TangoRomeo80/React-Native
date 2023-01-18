import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address of the restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating of the restaurant',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category of the restaurant',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes of the restaurant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
