const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Homepage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'intro',
      title: 'Intro Section',
      type: 'object',
      fields: [
        {
          name: 'eyebrow',
          title: 'Eyebrow Text',
          type: 'string',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'headingHighlight',
          title: 'Heading Highlight',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
        },
        {
          name: 'primaryButtonHref',
          title: 'Primary Button Link',
          type: 'string',
        },
        {
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
        },
        {
          name: 'secondaryButtonHref',
          title: 'Secondary Button Link',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      };
    },
  },
};

export default homePage;
