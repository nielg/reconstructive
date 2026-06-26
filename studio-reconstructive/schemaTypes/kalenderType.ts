import {defineField, defineType} from 'sanity'

export const kalenderType = defineType({
  name: 'kalender',
  title: 'Kalender',
  type: 'document',
  fields: [
    defineField({
      title: 'Datum',
      name: 'datum',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Voor bij je construct', value: 'Voorbij je construct'},
          {title: 'Reconstructive', value: 'Reconstructive'},
          {title: 'Find your gold', value: 'Find your gold'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      title: 'Locatie',
      name: 'locatie',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Prijs',
      name: 'prijs',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'taal',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Aantal deelnemers?',
      name: 'aantalDeelnemers',
      type: 'string',
    }),
    defineField({
      title: 'Voor wie?',
      name: 'voorWie',
      type: 'string',
    }),
    defineField({
      name: 'overnachting',
      title: 'Overnachting inbegrepen?',
      type: 'boolean',
    }),
  ],
})
