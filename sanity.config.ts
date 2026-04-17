'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas';
import { apiVersion, dataset, projectId } from './sanity/env';
import { structure } from './sanity/structure';

const singletonTypes = new Set(['homePage']);

const config = defineConfig({
  projectId,
  dataset,
  title: 'My Portfolio Website',
  apiVersion,
  basePath: '/admin',
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemas,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (prev, context) =>
      singletonTypes.has(context.schemaType)
        ? prev.filter(
            ({ action }) =>
              action && !['duplicate', 'delete', 'unpublish'].includes(action),
          )
        : prev,
  },
});

export default config;
