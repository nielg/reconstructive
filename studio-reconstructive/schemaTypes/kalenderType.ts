import {defineField, defineType} from 'sanity'

export const kalenderType = defineType({
  name: 'kalender',
  title: 'Kalender',
  type: 'document',
  fields: [
    defineField({
      title: 'Taal van de kalender',
      name: 'language',
      type: 'string',
      options: {
        list: [
          {title: 'Nederlands', value: 'nl'},
          {title: 'English', value: 'en'},
        ],
        layout: 'radio',
      },
      initialValue: 'Nederlands',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Datum title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Reconstructive', value: 'Reconstructive'},
          {title: 'Find your gold', value: 'Find your gold'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      title: 'Overnachting inbegrepen?',
      name: 'Datum',
      type: 'boolean',
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
      title: 'Aantal deelnemers?',
      name: 'aantalDeelnemers',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Voor wie?',
      name: 'voorWie',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Taal begeleiding',
      name: 'taal_beg',
      type: 'string',
      options: {
        list: [
          {title: 'Nederlands', value: 'Nederlands'},
          {title: 'English', value: 'English'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      title: 'Start datum voor het sorteren',
      name: 'startDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
  ],
})
