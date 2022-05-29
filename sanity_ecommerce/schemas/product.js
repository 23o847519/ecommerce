export default {
name : 'product',
title: 'Product',
type: 'document',
fields: [
{
    name: 'image',
    title: 'Image',
    type: 'array',
    of: [{type: 'image'}],
    options: {
        hotspot: true,
    }
 },
   {
    name: 'name',
    title: 'Name',
    tye: 'string',
   },
   {
    name: 'slug',
    title: 'Slug',
    type: 'Slug',
    options: {
        source: 'name',
        maxLength: 90,
    }
  },
  {
      name: 'price',
      title: 'price',
      type: 'number',
  },
  {
    name: 'details'
  },
 ]
}